import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Model } from './model';
import { User } from './user';

@ObjectType('Post', { isAbstract: true })
@InputType({ isAbstract: true })
export class Post extends Model {
  @Field((_) => String)
  title: string;

  @Field((_) => String)
  content: string;

  @Field((_) => Int)
  userId: number;

  @Field((_) => User)
  user: User;
}
