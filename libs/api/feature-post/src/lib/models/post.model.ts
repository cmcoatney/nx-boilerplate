import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '@nxws-data-access/auth'

import { Comment } from '@nxws-data-access/comment'

// TODO: recommended implement base class
@ObjectType()
export class Post {
  @Field({ nullable: true })
  id: number

  @Field({ nullable: true })
  createdAt: Date

  @Field({ nullable: true })
  updatedAt: Date

  @Field({ nullable: true })
  title: string

  @Field({ nullable: true })
  content: string | null

  // @Field({ nullable: true})
  // published: PublicationStatus

  @Field(() => User, { nullable: true })
  author: User

  @Field(() => [Comment], { nullable: true })
  comments: Comment[]
}
