import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user';
import { PrismaService } from 'src/utils/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

const POST_TO_PAGE = 5;

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  createPost({ id }: User, createPostInput: CreatePostInput) {
    return this.prisma.post.create({
      data: {
        ...createPostInput,
        userId: id,
      },
    });
  }

  updatePost(postId: number, updatePostInput: UpdatePostInput) {
    return this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        ...updatePostInput,
      },
    });
  }

  getPostsByPage(pageNum: number) {
    return this.prisma.post.findMany({
      skip: pageNum * POST_TO_PAGE,
      take: POST_TO_PAGE,
      where: {
        deletedAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  getAllPage() {
    return this.prisma.post.findMany({
      where: {
        deletedAt: null,
      },
    });
  }

  deletePost(postId: number) {
    return this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
