import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './feature/post-detail/post-detail.component';
import { PostListComponent } from './feature/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PostListComponent,
  },
  {
    path: 'list',
    pathMatch: 'full',
    component: PostListComponent,
  },
  {
    path: 'detail',
    pathMatch: 'full',
    component: PostDetailComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
