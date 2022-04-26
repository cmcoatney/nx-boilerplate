import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'

import { ApiDataAccessService } from '@nxws-data-access'
import { AuthHelper } from '@nxws/shared/util'
import { AuthLoginInput } from './dto/auth-login.input'
import { AuthRegisterInput } from './dto/auth-register.input'
import { UserToken } from './models/user-token'

@Injectable()
export class ApiFeatureAuthService {
  constructor(private readonly data: ApiDataAccessService) {}

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
    return ' TEMP TOKEN FOR ID ' + id
  }
}
