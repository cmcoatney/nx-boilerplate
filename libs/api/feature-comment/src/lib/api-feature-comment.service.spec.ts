import { Test } from '@nestjs/testing'
import { ApiFeatureCommentService } from './api-feature-comment.service'

describe('ApiFeatureCommentService', () => {
  let service: ApiFeatureCommentService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiFeatureCommentService],
    }).compile()

    service = module.get(ApiFeatureCommentService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})
