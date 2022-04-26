import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { ApiDataAccessService } from '@nxws-data-access'
import { AuthHelper } from '@nxws/shared/util'

import { AuthLoginInput } from './dto/auth-login.input'
import { AuthRegisterInput } from './dto/auth-register.input'
import { JwtDto } from './dto/jwt.dto'
import { UserToken } from './models/user-token'
import { User } from './models/user.model'

@Injectable()
export class ApiFeatureAuthService {
  constructor(private readonly data: ApiDataAccessService, private readonly jwt: JwtService) {}

  public async login(input: AuthLoginInput): Promise<UserToken> {
    const found = await this.data.findUserByEmail(input.email)

    if (!found) {
      throw new NotFoundException(`User with email ${input.email} does not exist`)
    }

    const passwordValid = await AuthHelper.validate(input.password, found.password)

    if (!passwordValid) {
      throw new Error(`Invalid password`)
    }

    return { user: found, token: this.signToken(found.id) }
  }

  public async register(input: AuthRegisterInput): Promise<UserToken> {
    const found = await this.data.findUserByEmail(input.email)
    if (found) {
      throw new BadRequestException(`Cannot register with email ${input.email}`)
    }
    const hashedPassword = await AuthHelper.hash(input.password)

    const created = await this.data.user.create({
      data: {
        email: input.email,
        username: input.username,
        password: hashedPassword,
      },
    })

    return { user: created, token: this.signToken(created.id) }
  }

  signToken(id: number): string {
    const payload: JwtDto = { userId: id }
    
    return this.jwt.sign(payload)
  }

  validateUser(userId: number) : Promise<User> {
    // user expired?
    return this.data.findUserById(userId)
  }
}
