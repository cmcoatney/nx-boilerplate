import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostDetailComponent } from './post-detail.component'

@NgModule({
  imports: [CommonModule],
  declarations: [PostDetailComponent],
  exports: [PostDetailComponent],
})
export class PostDetailComponentModule {}
