import { Field, ObjectType } from '@nestjs/graphql';
import { Model } from './model';
import { Post } from './post';

@ObjectType('model')
export class User extends Model {
  @Field((_) => String)
  email: string;

  @Field((_) => String)
  passWord: string;

  @Field((_) => [Post])
  posts: Post[];
}
