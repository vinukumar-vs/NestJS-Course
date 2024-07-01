import { Injectable } from '@nestjs/common';
import { MyLoggerService } from './my-logger/my-logger.service';

@Injectable()
export class AppService {
  constructor(private readonly myLogger: MyLoggerService) {
    this.myLogger.setContext('MyLogger');
  }
  getHello(): string {
    this.myLogger.log('Get - hello()');
    this.myLogger.customLog();
    return 'Hello World!';
  }
}
