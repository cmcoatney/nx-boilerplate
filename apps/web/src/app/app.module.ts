import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { GraphQLModule } from './graphql.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'

import { NgStateModule, ngStateRoutes } from '@nxws-ngrx'
import { NgMaterialModule } from '@nxws-material'

import { PostsModule } from './posts/posts.module'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule),
  },
]
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    NgStateModule,
    NgMaterialModule,
    PostsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
