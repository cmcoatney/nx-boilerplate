import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostListComponent } from './post-list.component'
import { PostCardComponent } from '../../ui/post-card/post-card.component'
import { NgMaterialModule } from '@nxws-material'
import { NgSdkModule } from '@nxws-ng-sdk'

@NgModule({
  imports: [CommonModule, NgMaterialModule, NgSdkModule],
  declarations: [PostListComponent, PostCardComponent],
  exports: [PostListComponent, PostCardComponent],
})
export class PostListComponentModule {}
