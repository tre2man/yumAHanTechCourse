import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/sign-up.input';
import { SignInInput } from './dto/sign-up.input copy';
import { SignOutput } from './dto/sign-up.output';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((_) => SignOutput)
  async singUp(
    @Args('signUpInput', { type: () => SignUpInput }) signUpInput: SignUpInput,
  ) {
    return this.authService.signUp(signUpInput);
  }

  @Mutation((_) => SignOutput)
  async singIn(
    @Args('signInInput', { type: () => SignInInput }) signInInput: SignInInput,
  ) {
    return this.authService.signIn(signInInput);
  }
}
