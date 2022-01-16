import { Module } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PostResolver, PostService, PrismaService],
})
export class PostModule {}
