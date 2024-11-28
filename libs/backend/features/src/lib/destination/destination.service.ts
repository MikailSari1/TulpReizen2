import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import {Activities, IDestination, IGuide} from '@TulpReizen2/shared/api';
import {BehaviorSubject} from 'rxjs';
import {CreateDestinationDto, CreateGuideDto} from "@TulpReizen2/backend/dto";

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
  create(destination?: CreateDestinationDto): IDestination {
    Logger.log('create', this.TAG);

    // Generate a new unique ID
    const newId = (this.destinations$.value.length > 0
        ? Math.max(...this.destinations$.value.map((w) => parseInt(w.id, 10))) + 1
        : 0
    ).toString();

    // Create a new destination with provided data or fallback to defaults
    const newDestination: IDestination = {
      id: newId,
      location: destination?.location || 'Unknown',
      description: destination?.description || 'No description provided',
      activities: destination?.activities || Activities.None,
    };

    // Add the new workout to the list
    this.destinations$.next([...this.destinations$.value, newDestination]);

    Logger.log(`Created new guide: ${JSON.stringify(newDestination)}`, this.TAG);

    return newDestination;
  }

  delete(id: string): void {
    Logger.log(`delete(${id})`, this.TAG);
    const current = this.destinations$.value;
    const updated = current.filter((destination) => destination.id !== id);
    if (current.length === updated.length) {
      throw new NotFoundException(`destination could not be found!`);
    }
    this.destinations$.next(updated);
  }

  update(id: string, destination: Pick<IDestination, 'location' >): IDestination {
    Logger.log(`update(${id})`, this.TAG);
    const currentDestinations = this.destinations$.value;
    const destinationIndex = currentDestinations.findIndex((destination) => destination.id === id);

    if (destinationIndex === -1) {
      throw new NotFoundException(`Destination with ID ${id} not found`);
    }
    const updatedDestination = {
      ...currentDestinations[destinationIndex],
      ...destination,
    };

    currentDestinations[destinationIndex] = updatedDestination;
    this.destinations$.next([...currentDestinations]);

    return updatedDestination;
  }
}
