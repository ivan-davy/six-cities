import {NewOffer, UserRegister} from '../types/types';
import CreateOfferDto from '../dto/offer/create-offer.dto';

export const adaptOfferToServer =
  (offer: NewOffer): CreateOfferDto => ({
    title: offer.title,
    description: offer.description,
    postedDate: new Date(),
    city: offer.city.name,
    imagePreview: offer.previewImage,
    images: offer.images,
    premium: offer.isPremium,
    rating: 2.5,
    type: offer.type.toString(),
    rooms: offer.bedrooms,
    guests: offer.maxAdults,
    price: offer.price,
    features: offer.goods,
    coordinates: offer.location,
  });

export const adaptRegisterToServer =
  (user: UserRegister) => ({
    email: user.email,
    name: user.name,
    password: user.password,
    status: user.type === 'regular' ? 'Standard' : 'Premium',
    avatarPath: user.avatar,
  });
