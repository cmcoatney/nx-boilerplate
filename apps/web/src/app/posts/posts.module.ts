import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '@nxws-material'

import { PostsRoutingModule } from './posts-routing.module';
import { PostCardComponent } from './ui/post-card/post-card.component';


@NgModule({
  declarations: [PostCardComponent],
  imports: [CommonModule, PostsRoutingModule, NgMaterialModule],
})
export class PostsModule {}
