import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsDate
} from 'class-validator';
import {
  ICreateGuide,
  IUpdateGuide,
  IUpsertGuide,
  Activities
} from '@TulpReizen2/shared/api';
import {Id} from "@TulpReizen2/shared/api";

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateGuideDto implements ICreateGuide {
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

export class UpsertGuideDto implements IUpsertGuide {
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

export class UpdateGuideDto implements IUpdateGuide {
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
