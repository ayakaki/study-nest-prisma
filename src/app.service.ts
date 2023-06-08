import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async postUser(): Promise<string> {
    const newUser = await this.prisma.user.create({
      data: {
        id: 144,
        name: '山田花子',
        email: 'alie456@prisma.io',
        tel: '08047581236',
      },
    });

    return newUser.name;
  }

  // ユーザー一覧を取得するメソッド
  async getUsers(): Promise<any> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
