import { Module } from '@nestjs/common'
import { ApiDataAccessModule } from '@nxws-data-access'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [ApiDataAccessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
