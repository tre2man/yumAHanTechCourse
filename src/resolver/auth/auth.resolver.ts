import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/model/user';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/sign-up.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((_) => User)
  async singUp(
    @Args('signUpInput', { type: () => SignUpInput }) signUpInput: SignUpInput,
  ) {
    return this.authService.signUp(signUpInput);
  }
}
