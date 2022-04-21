import { Module } from '@nestjs/common'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ApiFeaturePostModule } from '@nxws-data-access/post'
import { ApiFeatureAuthModule } from '@nxws-data-access/auth'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, autoSchemaFile: true }),
    
    ApiFeaturePostModule,
    ApiFeatureAuthModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
