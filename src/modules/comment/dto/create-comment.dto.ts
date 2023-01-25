import {IsInt, IsMongoId, Max, MaxLength, Min, MinLength} from 'class-validator';

export default class CreateCommentDto {
  @MinLength(5, {message: 'Minimum review length is 5 symbols'})
  @MaxLength(5, {message: 'Maximum review length is 1024 symbols'})
  public text!: string;

  @IsMongoId({message: '$property field must contain a valid id'})
  public offerId!: string;

  @IsMongoId({message: '$property field must contain a valid id'})
  public userId!: string;

  @IsInt({message: '$property must be an integer'})
  @Min(1, {message: '$property must be an integer value between 1 and 5'})
  @Max(5, {message: '$property must be an integer value between 1 and 5'})
  public rated!: number;
}
