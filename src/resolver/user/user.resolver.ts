import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/model/user';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((_) => Boolean)
  test() {
    return true;
  }

  @UseGuards(GqlAuthGuard)
  @Query((_) => User)
  findUser(@Args('email', { type: () => String }) email: string) {
    return this.userService.findUser(email);
  }
}
