export function sharedUtil(): string {
  return 'shared-util'
}

export class AuthHelper {
  static validate(): Promise<boolean> {
    //
  }
  static hash(password: string): Promise<string> {
    //
  }
}
