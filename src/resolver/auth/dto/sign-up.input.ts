import { InputType, PickType } from '@nestjs/graphql';
import { User } from 'src/model/user';

@InputType('SignUpInput')
export class SignUpInput extends PickType(
  User,
  ['email', 'passWord'],
  InputType,
) {}
