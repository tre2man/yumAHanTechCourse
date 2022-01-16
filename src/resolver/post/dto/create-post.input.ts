import { ArgsType, InputType, PickType } from '@nestjs/graphql';
import { Post } from 'src/model/post';

@ArgsType()
@InputType('CreatePostInput')
export class CreatePostInput extends PickType(
  Post,
  ['title', 'content'],
  InputType,
) {}
