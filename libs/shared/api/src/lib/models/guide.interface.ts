import { Id } from './id.type';
import { Activities } from './destination.interface';

type Guide = string;

export interface IGuide {
  id: Id;
  location: string;
  description: string;
  activities: Activities
}

export type ICreateGuide = Pick<
  IGuide,
  'location' | 'activities' | 'description'
>;

export type IUpdateGuide = Partial<Omit<IGuide, 'id'>>;
export type IUpsertGuide = Pick<
  IGuide,
  'location' | 'activities' | 'description'
>;
