import { BadRequestException, Injectable } from '@nestjs/common'

import { ApiDataAccessService } from '@nxws-data-access';
import { AuthLoginInput } from './dto/auth-login.input';
import { AuthRegisterInput } from './dto/auth-register.input';

@Injectable()
export class ApiFeatureAuthService {
  constructor(private readonly data: ApiDataAccessService) {}

  public login(input: AuthLoginInput): void {}

  public async register(input: AuthRegisterInput) {
    const found = await this.data.findUserByEmail(input.email)
    if(found){
      throw new BadRequestException(`Cannot register with email ${input.email}`);
    }
  }
}
