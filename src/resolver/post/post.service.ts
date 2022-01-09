import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
}
