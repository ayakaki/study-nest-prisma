import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  postOneUser(): Promise<string> {
    return this.appService.postUser();
  }

  @Get('users')
  getUsers(): Promise<any> {
    // 簡略化のため、Getメソッドでユーザ作成
    return this.appService.getUsers();
  }
}
