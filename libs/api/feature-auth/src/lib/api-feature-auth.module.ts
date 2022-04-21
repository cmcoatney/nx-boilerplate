import { Module } from '@nestjs/common'

import { ApiDataAccessModule } from '@nxws-data-access'
import { AuthResolver } from './api-feature-auth.resolver'
import { ApiFeatureAuthService } from './api-feature-auth.service'

@Module({
  imports: [ApiDataAccessModule],
  controllers: [],
  providers: [ApiFeatureAuthService, AuthResolver],
  exports: [ApiFeatureAuthService],
})
export class ApiFeatureAuthModule {}
