import { validate, configuration } from './config/configuration';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {}
