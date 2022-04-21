import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { AuthLoginInput } from './dto/auth-login.input'
import { AuthRegisterInput } from './dto/auth-register.input'

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService){}

  @Mutation()
  login(@Args('input') input: AuthLoginInput) {
    return this.service.login(input)
  }

  @Mutation()
  register(@Args('input') input: AuthRegisterInput) {
    return this.service.register(input)
  }
}
