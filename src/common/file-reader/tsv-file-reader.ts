import {readFileSync} from 'fs';
import {Offer} from '../../types/offer.type.js';
import {FileReaderInterface} from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([
        title, description, postedDate, city, imagePreview,
        images, premium, favorite, rating, kind,
        rooms, guests, price, categories,
        commentsQty, coordinates, name, email, avatarPath,
        password, status
      ]) => ({
        title,
        description,
        postedDate: new Date(postedDate),
        city,
        imagePreview,
        images: images.split(';'),
        premium: premium === 'true',
        favorite: favorite === 'true',
        rating: parseInt(rating, 10),
        kind,
        rooms: parseInt(rooms, 10),
        guests: parseInt(guests, 10),
        price: Number.parseInt(price, 10),
        categories: categories.split(';').map((ctgName) => ({name: ctgName})),
        user: {
          name,
          email,
          avatarPath,
          password,
          status,
        },
        commentsQty: parseInt(commentsQty, 10),
        coordinates: {
          latitude: coordinates.split(';')[0],
          longitude: coordinates.split(';')[1]
        }
      }));
  }
}
