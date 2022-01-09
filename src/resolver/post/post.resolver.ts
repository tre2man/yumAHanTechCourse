import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { PostService } from './post.service';

@Resolver()
export class UserResolver {
  constructor(private postService: PostService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation((_) => User)
  createPost() {
    return;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_) => User)
  updatePost() {
    return;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_) => User)
  deletePost() {
    return;
  }
}
