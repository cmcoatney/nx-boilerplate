import { Module } from '@nestjs/common'
import { ApiFeatureProfileService } from './api-feature-profile.service'

@Module({
  controllers: [],
  providers: [ApiFeatureProfileService],
  exports: [ApiFeatureProfileService],
})
export class ApiFeatureProfileModule {}
