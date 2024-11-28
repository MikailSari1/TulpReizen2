import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import {Activities, IGuide} from '@TulpReizen2/shared/api';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class GuideService {
  TAG = 'GuideService';

  private guides$ = new BehaviorSubject<IGuide[]>([
    {
      id: '1',
      location: 'Bali',
      description: 'During my trip to Bali, I discovered the best spot for sunsets is Uluwatu Temple. If you visit, make sure to stay for the Kecak dance performance—it’s unforgettable! Tip: Rent a scooter to explore the hidden beaches like Nyang Nyang and avoid the tourist crowds.',
      activities: Activities.Surfing,
    },
    {
      id: '2',
      location: 'Paris',
      description: 'On my visit to Paris, I found that visiting the Eiffel Tower at night is far more magical due to the sparkling lights. For a quieter experience, skip the crowded restaurants and enjoy a picnic by the Seine. Tip: Pre-book tickets for the Louvre to save hours of waiting!',
      activities: Activities.Sightseeing,
    },
    {
      id: '3',
      location: 'Reykjavik',
      description: 'Exploring Reykjavik, I loved the cozy cafes and street art downtown. The Blue Lagoon was worth the visit, especially early in the morning before it gets too crowded. Tip: Don’t forget to pack layers—the weather changes quickly even in summer!',
      activities: Activities.Hiking,
    },
    {
      id: '4',
      location: 'Kyoto',
      description: 'In Kyoto, my favorite memory was walking through the Arashiyama Bamboo Grove at sunrise—almost no one was there! Fushimi Inari Shrine’s endless red gates were also breathtaking. Tip: Rent a kimono for the full cultural experience—it’s surprisingly affordable and fun!',
      activities: Activities.CulturalTours,
    },
    {
      id: '5',
      location: 'Queenstown',
      description: 'Queenstown is a paradise for thrill-seekers! I tried bungee jumping at the Kawarau Bridge, and it was the highlight of my trip. Tip: Book adventure activities early, as spots fill up fast during peak season. Also, try a Fergburger—it lives up to the hype!',
      activities: Activities.AdventureSports,
    },
    {
      id: '6',
      location: 'Santorini',
      description: 'Santorini was all about stunning views and relaxation. Watching the sunset in Oia is a must, but I found the Akrotiri Lighthouse to be even more peaceful. Tip: Take a boat tour to explore the volcanic hot springs and avoid the tourist-packed beaches.',
      activities: Activities.Sightseeing,
    },
    {
      id: '7',
      location: 'Dubai',
      description: 'In Dubai, I loved the mix of modern skyscrapers and desert adventures. The Burj Khalifa view was breathtaking, but a desert safari with dune bashing and camel rides was the highlight. Tip: Visit the souks to pick up unique souvenirs and haggle for better prices!',
      activities: Activities.Shopping,
    },
    {
      id: '8',
      location: 'Banff',
      description: 'In Banff, the turquoise waters of Lake Louise were absolutely stunning. I also enjoyed the Johnston Canyon hike—don’t miss the Upper Falls! Tip: Visit early in the morning for the best photos and fewer crowds, and bring a reusable water bottle.',
      activities: Activities.Skiing,
    },
    {
      id: '9',
      location: 'Cape Town',
      description: 'Cape Town blew me away with its diversity. Hiking up Table Mountain gave me the best panoramic views. Tip: Take the cable car down to save energy! Also, a visit to the Cape Winelands is perfect for wine lovers.',
      activities: Activities.Hiking,
    },

  ]);




  getAll(): IGuide[] {
    Logger.log('getAll', this.TAG);
    return this.guides$.value;
  }

  getOne(id: string): IGuide {
    Logger.log(`getOne(${id})`, this.TAG);
    const guide = this.guides$.value.find((td) => td.id === id);
    if (!guide) {
      throw new NotFoundException(`guide could not be found!`);
    }
    return guide;
  }

  /**
   * Update the arg signature to match the DTO, but keep the
   * return signature - we still want to respond with the complete
   * object
   */
  create(guide: Pick<IGuide, 'location' | 'description'>): IGuide {
    Logger.log('create', this.TAG);
    const current = this.guides$.value;
    // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
    const newGuide: IGuide = {
      ...guide,
      id: `guide-${Math.floor(Math.random() * 10000)}`,
      activities: Activities.Clubbing,
    };
    this.guides$.next([...current, newGuide]);
    return newGuide;
  }

  delete(id: string): void {
    Logger.log(`delete(${id})`, this.TAG);
    const current = this.guides$.value;
    const updated = current.filter((guide) => guide.id !== id);
    if (current.length === updated.length) {
      throw new NotFoundException(`guide could not be found!`);
    }
    this.guides$.next(updated);
  }
}
