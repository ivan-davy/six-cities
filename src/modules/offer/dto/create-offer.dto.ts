import {CoordinatesType} from '../../../types/coordinates.type.js';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum, IsInt, IsMongoId, IsNumber, Max,
  MaxLength, Min,
  MinLength, Validate
} from 'class-validator';
import {CityEnum} from '../../../types/city.enum.js';
import {TypeEnum} from '../../../types/type.enum.js';
import {FeatureEnum} from '../../../types/feature.enum.js';
import {MatchCityCoordinates} from './match-city-coordinates.validator.js';

export default class CreateOfferDto {
  @MinLength(10, {message: 'Minimum $property length must be 10'})
  @MaxLength(100, {message: 'Maximum $property length must be 10'})
  public title!: string;

  @MinLength(20, {message: 'Minimum $property length must be 20'})
  @MaxLength(1024, {message: 'Maximum $property length must be 1024'})
  public description!: string;

  @IsDateString({}, {message: '"$property must be a valid ISO date'})
  public postedDate!: Date;

  @IsEnum(CityEnum, {message: '$property should be a value from CityEnum'})
  public city!: string;

  public imagePreview!: string;

  @IsArray({message: '$property must be an array'})
  @ArrayMinSize(6, {message: '$property must contain exactly 6 items'})
  @ArrayMaxSize(6, {message: '$property must contain exactly 6 items'})
  public images!: string[];

  @IsBoolean({message: '$property must be a boolean'})
  public premium!: boolean;

  @IsNumber({maxDecimalPlaces: 1}, {message: 'Only 1 digit precision to the right of decimal point is allowed'})
  @Min(1, {message: '$property must be an integer value between 1 and 5'})
  @Max(5, {message: '$property must be an integer value between 1 and 5'})
  public rating!: number;

  @IsEnum(TypeEnum, {message: '$property should be a value from TypeEnum'})
  public type!: string;

  @IsInt({message: '$property must be an integer'})
  @Min(1, {message: '$property must be an integer value between 1 and 8'})
  @Max(8, {message: '$property must be an integer value between 1 and 8'})
  public rooms!: number;

  @IsInt({message: '$property must be an integer'})
  @Min(1, {message: '$property must be an integer value between 1 and 10'})
  @Max(10, {message: '$property must be an integer value between 1 and 10'})
  public guests!: number;

  @IsInt({message: '$property must be an integer'})
  @Min(10, {message: '$property must be an integer value between 100 and 100000'})
  @Max(100000, {message: '$property must be an integer value between 100 and 100000'})
  public price!: number;

  @IsArray({message: '$property must be an array'})
  @IsEnum(FeatureEnum, {message: '$property should be a value from FeatureEnum', each: true})
  public features!: string[];

  @Validate(MatchCityCoordinates)
  public coordinates!: CoordinatesType;

  @IsMongoId({message: '$property field must contain a valid id'})
  public user!: string;
}
