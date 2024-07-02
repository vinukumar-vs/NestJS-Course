import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  constructor(private myLogger?: MyLoggerService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.myLogger.customLog(context);
    return next.handle();
  }
}
