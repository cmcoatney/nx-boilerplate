import { Field, ObjectType } from '@nestjs/graphql'

import { User } from './user.model'

@ObjectType()
export class UserToken {
  @Field()
  token: string

  @Field()
  user: User
}
