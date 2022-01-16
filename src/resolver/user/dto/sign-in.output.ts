import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Model } from 'src/model/model';

@ObjectType('signInOutput')
export class SignInOutput extends Model {
  @Field((_) => Int)
  id: number;

  @Field((_) => String)
  email: string;

  @Field((_) => String)
  token: string;
}
