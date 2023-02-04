import {City, Offer, Type, User} from '../types/types.js';
import OfferResponse from '../dto/offer/offer.response';
import OffersResponse from '../dto/offer/offers.response';
import {CityLocation, UserType} from '../const';
import SafeUserResponse from '../dto/user/safe-user.response';

export const adaptCityToClient = (serverCity: string): City => ({
  name: serverCity,
  location: CityLocation[serverCity],
});


export const adaptOffersToClient =
  (serverOffers: OffersResponse[]): Offer[] => serverOffers
    .map((offer: OffersResponse) => ({
      id: offer.id,
      price: offer.price,
      rating: offer.rating,
      title: offer.title,
      isPremium: offer.premium,
      isFavorite: offer.favorite,
      city: adaptCityToClient(offer.city),
      location: CityLocation[offer.city],
      previewImage: offer.imagePreview,
      type: offer.type.toLowerCase() as Type,
      bedrooms: 0,
      description: '',
      goods: [''],
      host: {name: '', type: UserType.Regular, email: '', avatarUrl: ''},
      images: [''],
      maxAdults: 0,
    })
    );

export const adaptOfferToClient =
  (offer: OfferResponse[]): Offer => ({
    id: offer[0].id,
    price: offer[0].price,
    rating: offer[0].rating,
    title: offer[0].title,
    isPremium: offer[0].premium,
    isFavorite: offer[0].favorite,
    city: adaptCityToClient(offer[0].city),
    location: CityLocation[offer[0].city],
    previewImage: offer[0].imagePreview,
    type: (offer[0].type as string).toLowerCase() as Type,
    bedrooms: offer[0].rooms,
    description: offer[0].description,
    goods: offer[0].features,
    host: adaptSafeUserToClient(offer[0].user),
    images: offer[0].images,
    maxAdults: offer[0].guests,
  });

export const adaptSafeUserToClient =
  (user: SafeUserResponse): User => ({
    name: user.name,
    avatarUrl: user.avatarPath,
    type: user.status === 'Standard' ? UserType.Regular : UserType.Pro,
    email: user.email,
  });


