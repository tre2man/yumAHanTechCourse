import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findUser(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
