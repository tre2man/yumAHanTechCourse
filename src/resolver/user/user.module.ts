import { Module } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UserResolver, UserService, PrismaService],
})
export class UserModule {}
