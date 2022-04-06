import { Module } from '@nestjs/common'
import { ApiFeaturePostService } from './api-feature-post.service'

@Module({
  controllers: [],
  providers: [ApiFeaturePostService],
  exports: [ApiFeaturePostService],
})
export class ApiFeaturePostModule {}
