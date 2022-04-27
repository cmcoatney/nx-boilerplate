import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { ApiDataAccessModule } from '@nxws-data-access'
import { AuthResolver } from './api-feature-auth.resolver'
import { ApiFeatureAuthService } from './api-feature-auth.service'
import { GqlAuthGuard } from './guards/gql-auth-guard'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    ApiDataAccessModule,
    JwtModule.register({
      secret: '@REPLACE-THIS-SECRET-1234-!',
    }),
  ],
  controllers: [],
  providers: [ApiFeatureAuthService, AuthResolver, JwtStrategy, GqlAuthGuard],
  exports: [ApiFeatureAuthService],
})
export class ApiFeatureAuthModule {}
