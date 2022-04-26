import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
@Injectable()
export class ApiDataAccessService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  /**
   *
   */
  constructor() {
    super()
  }

  async findUserByUsername(username: string) {
    return this.user.findUnique({ where: { username: username } })
  }

  async findUserByEmail(email: string) {
    return this.user.findUnique({ where: { email: email } })
  }

  async findUserById(userId: number) {
     return this.user.findUnique({ where: { id: userId } })
  }

  async onModuleInit(): Promise<void> {
    await this.$connect()
  }
  async onModuleDestroy(): Promise<void> {
    await this.$disconnect()
  }
}
