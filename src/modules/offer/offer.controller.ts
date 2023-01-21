import {Controller} from '../../common/controller/controller.js';
import {inject, injectable} from 'inversify';
import {Component} from '../../types/component.types.js';
import {LoggerInterface} from '../../common/logger/logger.interface.js';
import {HttpMethod} from '../../types/http-method.enum.js';
import {Request, Response} from 'express';
import {OfferServiceInterface} from './Offer-service.interface.js';
import {StatusCodes} from 'http-status-codes';
import {fillDTO} from '../../utils/common.js';
import OfferResponse from './response/offer.response.js';
import OffersResponse from './response/offers.response.js';

@injectable()
export default class OfferController extends Controller {
  constructor(
    @inject(Component.LoggerInterface) logger: LoggerInterface,
    @inject(Component.OfferServiceInterface) private readonly offerService: OfferServiceInterface,
      //@inject(Component.ConfigInterface) private readonly configService: ConfigInterface,
  ) {
    super(logger);
    this.logger.info('Registering routes for OfferController…');

    this.addRoute({path: '/', method: HttpMethod.Get, handler: this.index});
    //this.addRoute({path: '/', method: HttpMethod.Post, handler: this.create});
    this.addRoute({path: '/:offerId', method: HttpMethod.Get, handler: this.indexByOfferId});
    //this.addRoute({path: '/:offerId', method: HttpMethod.Post, handler: this.updateById});
    //this.addRoute({path: ':offerId', method: HttpMethod.Delete, handler: this.deleteById});
    //this.addRoute({path: '/premium/:city', method: HttpMethod.Get, handler: this.indexPremiumByCity});

    //this.addRoute({path: '/favorite', method: HttpMethod.Get, handler: this.indexFavorite});
    //this.addRoute({path: '/favorite/:offerId', method: HttpMethod.Post, handler: this.addFavorite});
    //this.addRoute({path: '/favorite/:offerId', method: HttpMethod.Delete, handler: this.deleteFavorite});
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const offers = await this.offerService.find();
    const offersResponse = fillDTO(OffersResponse, offers);
    this.send(res, StatusCodes.OK, offersResponse);
  }

  /*public async create({body}: Request<Record<string, unknown>, Record<string, unknown>, CreateCommentDto>,
    res: Response): Promise<void> {

    const result = await this.offerService.;
    this.send(
      res,
      StatusCodes.CREATED,
      fillDTO(CommentResponse, result)
    );
  }*/

  public async indexByOfferId(req: Request, res: Response): Promise<void> {
    const offer = await this.offerService.findById(req.params.offerId);
    const offerResponse = fillDTO(OfferResponse, offer);
    this.send(res, StatusCodes.OK, offerResponse);
  }
}
