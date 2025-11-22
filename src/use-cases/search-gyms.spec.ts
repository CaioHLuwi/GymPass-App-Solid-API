import { it, expect, describe, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository.ts'
import { SearchGymsUseCase } from './search-gyms.ts'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Get User Metrics Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to get a specific gym by title', async () => {
    await gymsRepository.create({
      title: 'JavaScript Gym',
      latitude: -23.4323968,
      longitude: -43.5076224,
    })

    const { gyms } = await sut.execute({
      query: 'JavaScript Gym',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'JavaScript Gym' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `JavaScript Gym ${i}`,
        latitude: -23.4323968,
        longitude: -43.5076224,
      })
    }

    const { gyms } = await sut.execute({
      query: 'JavaScript Gym',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'JavaScript Gym 21' }),
      expect.objectContaining({ title: 'JavaScript Gym 22' }),
    ])
  })
})
