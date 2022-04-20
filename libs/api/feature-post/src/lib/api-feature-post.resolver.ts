import { Resolver, Query } from '@nestjs/graphql'

import { ApiFeaturePostService } from './api-feature-post.service'
import { Post } from './models/post.model'


@Resolver()
export class ApiPostResolver {
  constructor(private readonly service: ApiFeaturePostService) {}

  @Query(()=>[Post], {nullable: true})
  posts() {
    return this.service.posts()
  }
}
