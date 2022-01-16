import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { Model } from './model';
import { Post } from './post';

@ObjectType('User', { isAbstract: true })
@InputType({ isAbstract: true })
@ArgsType()
export class User extends Model {
  @Field((_) => String)
  email: string;

  @Field((_) => String)
  password: string;

  @Field((_) => [Post])
  posts: Post[];
}
