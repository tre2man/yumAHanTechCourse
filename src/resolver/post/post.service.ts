import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

const POST_TO_PAGE = 5;

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(createPostInput: CreatePostInput) {
    await this.prisma.post.create({
      data: {
        ...createPostInput,
      },
    });
  }

  async updatePost(postId: number, updatePostInput: UpdatePostInput) {
    await this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        ...updatePostInput,
      },
    });
  }

  async getPostsByPage(pageNum: number) {
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

  async deletePost(postId: number) {
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
