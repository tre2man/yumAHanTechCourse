import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/utils/prisma.service';
import { SignUpInput } from './dto/sign-up.input';
import { SignUpJwtDto } from './dto/sign-up-jwt-dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  // 유저 있는지 확인
  async validateUser(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  // 토큰 반환하기
  getToken = (input: SignUpJwtDto): string => {
    return this.jwtService.sign(input, {
      algorithm: 'HS256',
      expiresIn: '9999d',
    });
  };

  signUp = (singUpInput: SignUpInput) => {
    return this.prisma.user.create({
      data: {
        ...singUpInput,
      },
    });
  };
}
