import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Activities } from '@TulpReizen2/shared/api';
import { IsMongoId } from 'class-validator';
import { Id } from '@TulpReizen2/shared/api';

export type DestinationDocument = HydratedDocument<Destination>;

@Schema()
export class Destination {
  @IsMongoId()
  @Prop({ type: String })
  _id!: string;

  @Prop({ required: true })
  location!: string;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true, type: String, enum: Activities })
  activities!: Activities;



  id!: Id;
}

export const DestinationSchema = SchemaFactory.createForClass(Destination);
