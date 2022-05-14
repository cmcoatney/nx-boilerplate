import { Component, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ApolloAngularSDK } from '../../generated/graphql'
import { map, tap } from 'rxjs'

@Component({
  selector: 'nxws-feature-post',
  templateUrl: './feature-post.component.html',
  styleUrls: ['./feature-post.component.scss'],
})
export class FeaturePostComponent {
  // FACADE Pattern: Decouple data logic from UI by delegating

  // TODO: Refactor into NGRX Facade
  posts$ = this.sdk.posts().pipe(tap((r)=> console.log),map((result) => result.data.posts))

  constructor(private readonly sdk: ApolloAngularSDK) {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [FeaturePostComponent],
  exports: [FeaturePostComponent],
})
export class FeaturePostComponentModule {}
