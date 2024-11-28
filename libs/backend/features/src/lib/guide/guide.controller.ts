import {Controller, Delete, Put} from '@nestjs/common';
import { GuideService } from './guide.service';
import { Get, Param, Post, Body } from '@nestjs/common';
import { IGuide } from '@TulpReizen2/shared/api';
import { CreateGuideDto } from '@TulpReizen2/backend/dto';

@Controller('guide')
export class GuideController {
  constructor(private guideService: GuideService) {}

  @Get('')
  getAll(): IGuide[] {
    return this.guideService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IGuide {
    return this.guideService.getOne(id);
  }

 /* @Post('')
  create(@Body() data: CreateGuideDto): IGuide {
    return this.guideService.create(data);
  }*/

  @Post('')
  create(@Body() data: CreateGuideDto): IGuide {
    return this.guideService.create(data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.guideService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: CreateGuideDto): IGuide {
    return this.guideService.update(id, data);
  }
}
