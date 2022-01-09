import { Query, UseGuards } from '@nestjs/common';
import { Args, Resolver } from '@nestjs/graphql';
import { User } from 'src/model/user';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query((_) => User)
  findUser(@Args('email') email: string) {
    return this.userService.findUser(email);
  }
}
