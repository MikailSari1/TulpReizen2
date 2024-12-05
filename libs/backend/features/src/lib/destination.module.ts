import { Module } from '@nestjs/common';
import {DestinationController} from "./destination/destination.controller";
import {DestinationService} from "./destination/destination.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Destination, DestinationSchema} from "./destination/destination.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Destination.name, schema: DestinationSchema, collection: 'destination' }])],
  controllers: [DestinationController],
  providers: [DestinationService],
  exports: [DestinationService],
})
export class DestinationModule {}




