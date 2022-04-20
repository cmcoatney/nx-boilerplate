import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { GraphQLModule } from './graphql.module'
import { HttpClientModule } from '@angular/common/http'

import { FeaturePostComponentModule } from '@nxws-ng-sdk'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GraphQLModule, HttpClientModule, FeaturePostComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
