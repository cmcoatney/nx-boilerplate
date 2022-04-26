import { compare, hash, genSalt } from 'bcryptjs'

export class AuthHelper {
  static async validate(password: string, hashedPassword: string): Promise<boolean> {
    return await compare(password, hashedPassword)
  }
  static async hash(password: string): Promise<string> {
    const salt = await genSalt(6)
    return hash(password, salt)
  }
}
