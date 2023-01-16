import {DocumentType} from '@typegoose/typegoose';
import {OfferEntity} from './offer.entity.js';
import CreateOfferDto from './dto/create-offer.dto.js';
import UpdateOfferDto from './dto/update-offer.dto.js';

export interface OfferServiceInterface {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(offerId: string): Promise<DocumentType<OfferEntity>[]>;
  find(): Promise<DocumentType<OfferEntity>[]>;
  deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  incCommentQty(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  findPremiumByCity(count: number): Promise<DocumentType<OfferEntity>[]>;
  findFavorites(count: number): Promise<DocumentType<OfferEntity>[]>;
  exists(documentId: string): Promise<boolean>;
}
