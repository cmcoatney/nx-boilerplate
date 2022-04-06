import { Test } from '@nestjs/testing'
import { ApiFeaturePostService } from './api-feature-post.service'

describe('ApiFeaturePostService', () => {
  let service: ApiFeaturePostService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiFeaturePostService],
    }).compile()

    service = module.get(ApiFeaturePostService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})
