import { ObjectType, Field } from '@nestjs/graphql'

// TODO: recommended implement base class
@ObjectType()
export class User {
  @Field({ nullable: true })
  id: number
  @Field({ nullable: true })
  createdAt: Date
  @Field({ nullable: true })
  updatedAt: Date
  @Field({ nullable: true })
  email?: string
  @Field({ nullable: true })
  username?: string
  @Field({ nullable: true })
  name?: string
  // @Field({ nullable: true})
  // role: Role

  password?: string
}
