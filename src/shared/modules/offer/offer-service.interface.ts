import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity, CreateOfferDto } from './index.js';

export interface OfferService {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  findOfferList(limit?: number): Promise<DocumentType<OfferEntity>[]>;
  updateById(offerId: string, dto: CreateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  findPremiumByCity(city: string): Promise<DocumentType<OfferEntity>[]>;
  incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  exists(documentId: string): Promise<boolean>;
  updateRatingAndCommentCount(offerId: string, rating: number, commentCount: number): Promise<void>;
  findDuplicate(dto: CreateOfferDto): Promise<DocumentType<OfferEntity> | null>;
}
