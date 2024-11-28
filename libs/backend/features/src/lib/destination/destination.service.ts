import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import {Activities, IDestination} from '@TulpReizen2/shared/api';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DestinationService {
  TAG = 'DestinationService';

  private destinations$ = new BehaviorSubject<IDestination[]>([
    {
      id: '0',
      location: 'Bali',
      description: 'Beautiful place where the best sunset prevails.',
      activities: Activities.Clubbing,
    },
    {
      id: '1',
      location: 'Kyoto',
      description: 'A serene city filled with traditional temples and cherry blossoms.',
      activities: Activities.CulturalTours,
    },
    {
      id: '2',
      location: 'Queenstown',
      description: 'Adventure capital surrounded by stunning mountain landscapes.',
      activities: Activities.AdventureSports,
    },
    {
      id: '3',
      location: 'Santorini',
      description: 'Famous for its white-washed houses and crystal-clear Aegean waters.',
      activities: Activities.Relaxation,
    },
    {
      id: '4',
      location: 'Reykjavik',
      description: 'Gateway to Iceland’s otherworldly landscapes and northern lights.',
      activities: Activities.Exploration,
    },
    {
      id: '5',
      location: 'Cape Town',
      description: 'A vibrant city with stunning beaches and the iconic Table Mountain.',
      activities: Activities.Hiking,
    },
    {
      id: '6',
      location: 'Marrakech',
      description: 'A bustling city with colorful souks and rich Moroccan culture.',
      activities: Activities.Shopping,
    },
    {
      id: '7',
      location: 'Maldives',
      description: 'Tropical paradise with luxurious overwater bungalows.',
      activities: Activities.Watersports,
    },
  ]);


  getAll(): IDestination[] {
    Logger.log('getAll', this.TAG);
    return this.destinations$.value;
  }

  getOne(id: string): IDestination {
    Logger.log(`getOne(${id})`, this.TAG);
    const destination = this.destinations$.value.find((td) => td.id === id);
    if (!destination) {
      throw new NotFoundException(`destination could not be found!`);
    }
    return destination;
  }

  /**
   * Update the arg signature to match the DTO, but keep the
   * return signature - we still want to respond with the complete
   * object
   */
  create(destination: Pick<IDestination, 'location' | 'description'>): IDestination {
    Logger.log('create', this.TAG);
    const current = this.destinations$.value;
    // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
    const newDestination: IDestination = {
      ...destination,
      id: `destination-${Math.floor(Math.random() * 10000)}`,
      activities: Activities.Clubbing,
    };
    this.destinations$.next([...current, newDestination]);
    return newDestination;
  }
}
