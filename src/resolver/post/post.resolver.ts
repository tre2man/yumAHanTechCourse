import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from 'src/model/post';
import { User } from 'src/model/user';
import { CurrentUser } from '../auth/current-user';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation((_) => Post)
  createPost(
    @CurrentUser() user: User,
    @Args('createPostInput', { type: () => CreatePostInput })
    createPostInput: CreatePostInput,
  ) {
    return this.postService.createPost(user, createPostInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_) => Post)
  updatePost(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('updatePostInput', { type: () => UpdatePostInput })
    updatePostInput: UpdatePostInput,
  ) {
    return this.postService.updatePost(postId, updatePostInput);
  }

  // 회원이 아니여도 볼수 있게 가드 제거
  @Query((_) => [Post])
  getPostsByPage(@Args('pageNum', { type: () => Int }) pageNum: number) {
    return this.postService.getPostsByPage(pageNum);
  }

  @Query((_) => [Post])
  getAllPage() {
    return this.postService.getAllPage();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_) => Post)
  deletePost(@Args('postId', { type: () => Int }) postId: number) {
    return this.postService.deletePost(postId);
  }
}
