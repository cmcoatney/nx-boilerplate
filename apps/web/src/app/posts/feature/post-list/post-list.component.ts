import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Post } from '@prisma/client';
import { ApolloAngularSDK } from 'libs/ng/sdk/src/generated/graphql';
import { map, Observable } from 'rxjs'

@Component({
  selector: 'web-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit {
  posts$ = this.sdk.posts().pipe(map((result) => result.data.posts))

  constructor(private readonly sdk: ApolloAngularSDK) {}

  ngOnInit(): void {}
}
