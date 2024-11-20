import { Module } from '@nestjs/common';
import {DestinationController} from "./destination/destination.controller";
import {DestinationService} from "./destination/destination.service";

@Module({
  controllers: [DestinationController],
  providers: [DestinationService],
  exports: [DestinationService],
})
export class DestinationModule {}
