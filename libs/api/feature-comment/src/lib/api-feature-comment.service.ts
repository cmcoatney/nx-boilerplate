import { Injectable } from '@nestjs/common'
import { ApiDataAccessService } from '@nxws-data-access'

import { Comment } from '@prisma/client'

@Injectable()
export class ApiFeatureCommentService {
  constructor(private readonly data: ApiDataAccessService) {}

  async comments(): Promise<Comment[]> {
    return this.data.comment.findMany({ include: { author: true } })
  }
}
