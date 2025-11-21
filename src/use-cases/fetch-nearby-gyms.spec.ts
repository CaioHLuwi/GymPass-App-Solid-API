import { it, expect, describe, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository.ts'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms.ts'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Get User Metrics Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch a nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Nearby Gym',
      latitude: -23.4323968,
      longitude: -43.5076224,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      latitude: -23.4830981,
      longitude: 46.5537355,
    })

    const { gyms } = await sut.execute({
      userLatitude: -23.4323968,
      userLongitude: -43.5076224,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Nearby Gym' })])
  })
})
