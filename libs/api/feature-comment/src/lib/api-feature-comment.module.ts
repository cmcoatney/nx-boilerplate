import { Module } from '@nestjs/common'

import { ApiDataAccessModule } from '@nxws-data-access'

import { ApiFeatureCommentService } from './api-feature-comment.service'

@Module({
  imports: [ApiDataAccessModule],
  controllers: [],
  providers: [ApiFeatureCommentService],
  exports: [ApiFeatureCommentService],
})
export class ApiFeatureCommentModule {}
