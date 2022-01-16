import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { Post } from 'src/model/post';
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
    @Args('createPostInput', { type: () => CreatePostInput })
    createPostInput: CreatePostInput,
  ) {
    return this.postService.createPost(createPostInput);
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
  @Mutation((_) => [Post])
  getPostsByPage(@Args('pageNum', { type: () => Int }) pageNum: number) {
    return this.postService.getPostsByPage(pageNum);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_) => Post)
  deletePost(@Args('postId', { type: () => Int }) postId: number) {
    return this.postService.deletePost(postId);
  }
}
