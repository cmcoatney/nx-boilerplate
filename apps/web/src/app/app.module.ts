import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { GraphQLModule } from './graphql.module'
import { HttpClientModule } from '@angular/common/http'

import { FeaturePostComponentModule } from '@nxws-ng-sdk'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { NgStateModule, ngStateRoutes } from '@nxws-ngrx'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    FeaturePostComponentModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    NgStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
