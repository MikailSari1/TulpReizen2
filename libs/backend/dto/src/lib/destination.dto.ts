import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsDate
} from 'class-validator';
import {
  ICreateDestination,
  IUpdateDestination,
  IUpsertDestination,
  Activities
} from '@TulpReizen2/shared/api';
import {Id} from "../../../../shared/api/src/lib/models/id.type";

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateDestinationDto implements ICreateDestination {
  @IsString()
  @IsNotEmpty()
  location!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  activities!: Activities;

}

export class UpsertDestinationDto implements IUpsertDestination {
  @IsString()
  @IsNotEmpty()
  location!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  activities!: Activities;

}

export class UpdateDestinationDto implements IUpdateDestination {
  @IsString()
  @IsOptional()
  id!: Id;

  @IsString()
  @IsOptional()
  location!: string;

  @IsBoolean()
  @IsOptional()
  description!: string;

  @IsBoolean()
  @IsOptional()
  activities!: Activities;
}
