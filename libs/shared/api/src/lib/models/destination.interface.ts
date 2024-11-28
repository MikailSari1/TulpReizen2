import { Id } from './id.type';

export enum Activities {
  Clubbing = 'clubbing',
  Sporting = 'sporting',
  CulturalTours = 'cultural tours',
  AdventureSports = 'adventure sports',
  Relaxation = 'relaxation',
  Exploration = 'exploration',
  Hiking = 'hiking',
  Shopping = 'shopping',
  Watersports = 'watersports',
  Sightseeing = 'sightseeing',
  Skiing = 'skiing',
  Surfing = 'surfing',
  None = 'none',

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
