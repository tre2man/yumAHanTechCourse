import { InputType, PickType } from '@nestjs/graphql';
import { Post } from 'src/model/post';

@InputType('UpdatePostInput')
export class UpdatePostInput extends PickType(
  Post,
  ['content', 'title', 'userId'],
  InputType,
) {}
