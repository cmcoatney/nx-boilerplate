import { Module } from '@nestjs/common'

import { ApiDataAccessModule } from '@nxws-data-access'

import { ApiPostResolver } from './api-feature-post.resolver'
import { ApiFeaturePostService } from './api-feature-post.service'
import { ApiFeatureCommentModule } from '@nxws-data-access/comment'

@Module({
  imports: [ApiDataAccessModule, ApiFeatureCommentModule],
  controllers: [],
  providers: [ApiFeaturePostService, ApiPostResolver],
  exports: [ApiFeaturePostService],
})
export class ApiFeaturePostModule {}
