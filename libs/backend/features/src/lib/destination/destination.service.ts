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
