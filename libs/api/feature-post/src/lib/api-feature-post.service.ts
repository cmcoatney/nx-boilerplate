import { Injectable } from '@nestjs/common'

import { ApiDataAccessService } from '@nxws-data-access'
import { Post } from '@prisma/client'

@Injectable()
export class ApiFeaturePostService {
  /**
   *
   */
  constructor(private readonly data: ApiDataAccessService) {}

  async posts(): Promise<Post[]> {
    return this.data.post.findMany({ include: { author: true } })
  }
}
