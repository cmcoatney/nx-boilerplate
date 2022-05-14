/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3000
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
  Logger.log(`Running in ${config.get('environment')} mode`)
  Logger.log(`📈 GraphQL Playground: http://localhost:${port}/graphql`)
  Logger.log(`🔺 Run Prisma Studio: 'yarn studio'`)
}

bootstrap()
