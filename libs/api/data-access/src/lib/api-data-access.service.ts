import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
@Injectable()
export class ApiDataAccessService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  /**
   *
   */
  constructor() {
    super()

    // TODO: Remove this line when begin development
    this.findUserByUsername('matthewc').then(console.log)
  }

  async findUserByUsername(username: string) {
    return this.user.findUnique({ where: { username: username } })
  }

  async onModuleInit(): Promise<void> {
    await this.$connect()
  }
  async onModuleDestroy(): Promise<void> {
    await this.$disconnect()
  }
}
