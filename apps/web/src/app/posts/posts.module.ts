import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '@nxws-material'

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponentModule } from './feature/post-list/post-list.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, PostsRoutingModule, NgMaterialModule, PostListComponentModule],
  exports: [PostListComponentModule,],
})
export class PostsModule {}
