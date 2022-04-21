import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { GraphQLModule } from './graphql.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'

import { NgStateModule, ngStateRoutes } from '@nxws-ngrx'
import { NgMaterialModule } from '@nxws-material'

import { FeaturePostComponentModule } from '@nxws-ng-sdk'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    NgStateModule,
    NgMaterialModule,
    FeaturePostComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
