
import { TCity } from '@/components/Cities/types';
import { TOrganizer } from '@/components/Organizer/types';

export type TShow = 'popular' | 'newest';

export type TPackage = {
    id: number;
    name: string;
    slug: string;
    price: number;
    isPopular: 1 | 0;
    thumbnail: string;
    about: string;
    city: TCity;
    weddingOrganizer: TOrganizer;
};