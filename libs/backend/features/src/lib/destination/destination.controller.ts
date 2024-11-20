import { Controller } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { Get, Param, Post, Body } from '@nestjs/common';
import { IDestination } from '@TulpReizen2/shared/api';
import { CreateDestinationDto } from '@TulpReizen2/backend/dto';

@Controller('destination')
export class DestinationController {
  constructor(private destinationService: DestinationService) {}

  @Get('')
  getAll(): IDestination[] {
    return this.destinationService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IDestination {
    return this.destinationService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateDestinationDto): IDestination {
    return this.destinationService.create(data);
  }
}
