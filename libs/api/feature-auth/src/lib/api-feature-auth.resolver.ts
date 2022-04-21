import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { ApiFeatureAuthService } from './api-feature-auth.service'
import { AuthLoginInput } from './dto/auth-login.input'
import { AuthRegisterInput } from './dto/auth-register.input'

@Resolver()
export class AuthResolver {
  constructor(private readonly service: ApiFeatureAuthService){}

  @Mutation()
  login(@Args('input') input: AuthLoginInput) {
    return this.service.login(input)
  }

  @Mutation()
  register(@Args('input') input: AuthRegisterInput) {
    return this.service.register(input)
  }
}
