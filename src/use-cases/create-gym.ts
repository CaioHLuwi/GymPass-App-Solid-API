import type { Gym } from '@prisma/client'
import type { GymsRepository } from '@/repositories/gyms-repository.ts'

interface GymCreateUseCaseRequest {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface GymCreateUseCaseResponse {
  gym: Gym
}

export class GymCreateUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: GymCreateUseCaseRequest): Promise<GymCreateUseCaseResponse> {
    const gym = await this.gymsRepository.create({
      title,
      description,
      phone,
      latitude,
      longitude,
    })

    return {
      gym,
    }
  }
}
