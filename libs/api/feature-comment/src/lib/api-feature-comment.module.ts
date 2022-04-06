import { Module } from '@nestjs/common'
import { ApiFeatureCommentService } from './api-feature-comment.service'

@Module({
  controllers: [],
  providers: [ApiFeatureCommentService],
  exports: [ApiFeatureCommentService],
})
export class ApiFeatureCommentModule {}
