import { InputType, PickType } from '@nestjs/graphql';
import { User } from 'src/model/user';

@InputType('SignInInput')
export class SignInInput extends PickType(
  User,
  ['email', 'password'],
  InputType,
) {}
