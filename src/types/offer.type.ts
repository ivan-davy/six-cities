import {Category} from './category.type.js';
import {User} from './user.type.js';
import {Coordinates} from './coordinates.type';

export type Offer = {
  title: string;
  description: string;
  postedDate: Date;
  city: string;
  imagePreview: string;
  images: string[];
  premium: boolean;
  favorite: boolean;
  rating: number;
  kind: string;
  rooms: number;
  guests: number;
  price: number;
  categories: Category[];
  user: User;
  commentsQty: number;
  coordinates: Coordinates;
}
