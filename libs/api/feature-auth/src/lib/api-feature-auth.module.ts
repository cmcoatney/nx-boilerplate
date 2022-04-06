import { Module } from '@nestjs/common'
import { ApiFeatureAuthService } from './api-feature-auth.service'

@Module({
  controllers: [],
  providers: [ApiFeatureAuthService],
  exports: [ApiFeatureAuthService],
})
export class ApiFeatureAuthModule {}
