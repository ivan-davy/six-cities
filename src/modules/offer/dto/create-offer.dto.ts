import {CoordinatesType} from '../../../types/coordinates.type.js';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString, IsDivisibleBy,
  IsEnum, IsInt, IsMongoId, Max,
  MaxLength, Min,
  MinLength, ValidateIf
} from 'class-validator';
import {CityEnum} from '../../../types/city.enum.js';
import {TypeEnum} from '../../../types/type.enum.js';
import {FeatureEnum} from '../../../types/feature.enum.js';
import {COORDINATES} from '../../../const/coordinates.js';

export default class CreateOfferDto {
  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 10'})
  public title!: string;

  @MinLength(20, {message: 'Minimum description length must be 20'})
  @MaxLength(1024, {message: 'Maximum description length must be 1024'})
  public description!: string;

  @IsDateString({}, {message: '"postedDate" must be a valid ISO date'})
  public postedDate!: Date;

  @IsEnum(CityEnum, {message: '"city" should be a value from CityEnum'})
  public city!: string;

  public imagePreview!: string;

  @IsArray({message: '"images" must be an array'})
  @ArrayMinSize(6, {message: '"images" must contain exactly 6 items'})
  @ArrayMaxSize(6, {message: '"images" must contain exactly 6 items'})
  public images!: string[];

  @IsBoolean({message: '"premium" must be a boolean'})
  public premium!: boolean;

  @IsDivisibleBy(0.1, {message: 'Only 1 digit precision to the right of decimal point is allowed'})
  @Min(1, {message: '"rating" must be an integer value between 1 and 5'})
  @Max(5, {message: '"rating" must be an integer value between 1 and 5'})
  public rating!: number;

  @IsEnum(TypeEnum, {message: '"type" should be a value from TypeEnum'})
  public type!: string;

  @IsInt({message: '"rooms" must be an integer'})
  @Min(1, {message: '"rooms" must be an integer value between 1 and 8'})
  @Max(8, {message: '"rating" must be an integer value between 1 and 8'})
  public rooms!: number;

  @IsInt({message: '"guests" must be an integer'})
  @Min(1, {message: '"rooms" must be an integer value between 1 and 10'})
  @Max(10, {message: '"rating" must be an integer value between 1 and 10'})
  public guests!: number;

  @IsInt({message: '"guests" must be an integer'})
  @Min(10, {message: '"price" must be an integer value between 100 and 100000'})
  @Max(100000, {message: '"price" must be an integer value between 100 and 100000'})
  public price!: number;

  @IsArray({message: '"features" must be an array'})
  @IsEnum(FeatureEnum, {message: '"feature" should be a value from FeatureEnum', each: true})
  public features!: string[];

  @ValidateIf((object) => object.city === COORDINATES[object.city])
  public coordinates!: CoordinatesType;

  @IsMongoId({message: '"user" field must contain a valid id'})
  public user!: string;
}
