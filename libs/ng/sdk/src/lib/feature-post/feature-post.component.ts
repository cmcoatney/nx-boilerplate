import { Component, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ApolloAngularSDK } from '../../generated/graphql'
import { map } from 'rxjs'

@Component({
  selector: 'nxws-feature-post',
  templateUrl: './feature-post.component.html',
  styleUrls: ['./feature-post.component.scss'],
})
export class FeaturePostComponent {
  posts$ = this.sdk.posts().pipe(map(result => result.data.posts))

  constructor(private readonly sdk: ApolloAngularSDK) {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [FeaturePostComponent],
  exports: [FeaturePostComponent],
})
export class FeaturePostComponentModule {}
