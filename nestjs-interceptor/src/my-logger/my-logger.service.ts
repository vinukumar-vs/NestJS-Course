import { ConsoleLogger, Injectable } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import * as fs from 'fs';
import { promises as fsPromises } from 'fs';
import * as path from 'path';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  async logToFile(entry) {
    const formattedEntry = `${Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'America/Chicago',
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
        await fsPromises.mkdir(path.join(__dirname, '..', '..', 'logs'));
      }
      await fsPromises.appendFile(
        path.join(__dirname, '..', '..', 'logs', 'myLogFile.log'),
        formattedEntry,
      );
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
    }
  }

//   log(message: any, context?: string) {
//     const logEntry = `${context}\t${message}`;
//     super.log(message, context);
//   }

//   error(message: any, stackOrContext?: string): void;
//   error(message: any, stack?: string, context?: string): void;
//   error(message: any, ...optionalParams: any[]): void;
//   error(
//     message: unknown,
//     stack?: unknown,
//     context?: unknown,
//     ...rest: unknown[]
//   ): void {
//     super.error(message, stack, context, rest);
//   }

  customLog(message?: any) {
    if (typeof message !== 'string') {
      if (message instanceof ExecutionContextHost) {
        console.log(
          `Controller: ${message.getClass().name} and API: ${message.getHandler().name}`,
        );
      }
    } else {
      this.log(`Custom log message - \t ${message}`);
    }
  }
}
