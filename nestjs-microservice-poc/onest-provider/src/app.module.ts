import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EKSTEP_ONEST_ADAPTER',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3011,
        },
      },
      {
        name: 'AASTRIKA_ONEST_ADAPTER',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3012,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}