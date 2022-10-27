import {SliderItemType} from '@components/Slider/types';
import {SliderClips} from '@assets/images';

export const slides: SliderItemType[] = [
  {
    id: '1',
    sliderTitle: 'For trips abroad',
    description:
      'You are in another country but do not know the local language',
    image: SliderClips.SliderLanguages,
  },
  {
    id: '2',
    sliderTitle: 'For search',
    description: 'You can find places where they speak your language',
    image: SliderClips.SliderHandle,
  },
  {
    id: '3',
    sliderTitle: 'Various types of establishments',
    description: 'You can find any establishments, for example, to eat...',
    image: SliderClips.SliderCafe,
  },
  {
    id: '4',
    sliderTitle: 'Various types of establishments',
    description: '...or to work out in the gym',
    image: SliderClips.SliderGym,
  },
  {
    id: '5',
    sliderTitle: 'Various types of establishments',
    description: '...or maybe you need a haircut',
    image: SliderClips.SliderBarber,
  },
  {
    id: '6',
    sliderTitle: 'Mark on the map',
    description:
      'Just mark the establishments that serve in your language directly on the map',
    image: SliderClips.SliderMap,
  },
  {
    id: '7',
    sliderTitle: 'Gratitude',
    description: 'Thanks for using this app!',
    image: SliderClips.SliderThanks,
  },
];
