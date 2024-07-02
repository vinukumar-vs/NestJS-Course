import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LogInterceptor } from './interceptor/log/log.interceptor';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [MyLoggerModule],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    UserService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LogInterceptor,
    },
  ],
})
export class AppModule {}
