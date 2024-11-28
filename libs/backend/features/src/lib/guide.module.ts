import { Module } from '@nestjs/common';
import {GuideController} from "./guide/guide.controller";
import {GuideService} from "./guide/guide.service";

@Module({
  controllers: [GuideController],
  providers: [GuideService],
  exports: [GuideService],
})
export class GuideModule {}
