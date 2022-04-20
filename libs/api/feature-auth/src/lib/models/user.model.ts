import {ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field({ nullable: true})
  id: number
  @Field({ nullable: true})
  createdAt: Date
  @Field({ nullable: true})
  updatedAt: Date
  @Field({ nullable: true})
  email: string
  @Field({ nullable: true})
  username: string
  @Field({ nullable: true})
  name: string | null
  // @Field({ nullable: true})
  // role: Role
}


