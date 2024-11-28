import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DestinationModule, GuideModule} from "@TulpReizen2/backend/features";

@Module({
  imports: [DestinationModule, GuideModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
