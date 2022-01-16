import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/model/user';

@ObjectType()
export class SignOutput {
  @Field((_) => User)
  user: User;

  @Field((_) => String)
  token: string;
}
