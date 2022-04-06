import { Test } from '@nestjs/testing'
import { ApiFeatureProfileService } from './api-feature-profile.service'

describe('ApiFeatureProfileService', () => {
  let service: ApiFeatureProfileService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiFeatureProfileService],
    }).compile()

    service = module.get(ApiFeatureProfileService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})
