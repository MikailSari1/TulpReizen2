import { Id } from './id.type';

export enum Activities {
  Clubbing = 'clubbing',
  Sporting = 'sporting',

}

type Destination = string;

export interface IDestination {
  id: Id;
  location: string;
  description: string;
  activities: Activities;
}

export type ICreateDestination = Pick<
  IDestination,
  'location' | 'activities' | 'description'
>;

export type IUpdateDestination = Partial<Omit<IDestination, 'id'>>;
export type IUpsertDestination = Pick<
  IDestination,
  'location' | 'activities' | 'description'
>;
