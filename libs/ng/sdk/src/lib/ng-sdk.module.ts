import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeaturePostComponentModule } from './feature-post/feature-post.component'

@NgModule({
  imports: [CommonModule],
  exports: [FeaturePostComponentModule]
})
export class NgSdkModule {}
