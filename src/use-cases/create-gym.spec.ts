import { it, expect, describe, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository.ts'
import { GymCreateUseCase } from './create-gym.ts'

let gymsRepository: InMemoryGymsRepository
let sut: GymCreateUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new GymCreateUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -23.4323968,
      longitude: -46.5076224,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
