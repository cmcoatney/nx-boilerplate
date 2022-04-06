import { Test } from '@nestjs/testing'
import { ApiDataAccessService } from './api-data-access.service'

describe('ApiDataAccessService', () => {
  let service: ApiDataAccessService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiDataAccessService],
    }).compile()

    service = module.get(ApiDataAccessService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})
