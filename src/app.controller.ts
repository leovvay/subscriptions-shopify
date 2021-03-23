import { Controller, All, HttpCode, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('ab*cd')
  @HttpCode(204)
  @Redirect('https://nestjs.com', 301)
  getHello(): string {
    return this.appService.getHello();
  }
}
