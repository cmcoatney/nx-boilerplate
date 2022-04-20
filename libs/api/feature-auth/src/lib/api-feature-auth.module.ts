import { Module } from '@nestjs/common'

import { ApiDataAccessModule } from '@nxws-data-access'

import { ApiFeatureAuthService } from './api-feature-auth.service'

@Module({
  imports: [ApiDataAccessModule],
  controllers: [],
  providers: [ApiFeatureAuthService],
  exports: [ApiFeatureAuthService],
})
export class ApiFeatureAuthModule {}
