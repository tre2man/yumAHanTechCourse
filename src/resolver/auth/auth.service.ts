import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/utils/prisma.service';
import { SignUpInput } from './dto/sign-up.input';
import { SignUpJwtDto } from './dto/sign-up-jwt-dto';
import { SignInInput } from './dto/sign-up.input copy';

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
  getUserToken = (input: SignUpJwtDto): string => {
    return this.jwtService.sign(input, {
      algorithm: 'HS256',
      expiresIn: '999d',
    });
  };

  // expiresIn은 Object 입력에만 사용가능
  getPasswordToken = (password: string): string => {
    return this.jwtService.sign(password, {
      algorithm: 'HS256',
    });
  };

  signUp = async (singUpInput: SignUpInput) => {
    const user = await this.prisma.user.create({
      data: {
        ...singUpInput,
        password: this.getPasswordToken(singUpInput.password),
      },
    });
    const userToken = this.getUserToken({
      id: user.id,
      email: user.email,
      env: process.env.NODE_ENV,
    });
    return { user, token: userToken };
  };

  signIn = async (signInInput: SignInInput) => {
    const encryptedPassword = this.getPasswordToken(signInInput.password);
    const user = await this.prisma.user.findFirst({
      where: {
        email: signInInput.email,
        password: encryptedPassword,
      },
    });
    if (!user) throw new UnauthorizedException();
    const userToken = this.getUserToken({
      id: user.id,
      email: user.email,
      env: process.env.NODE_ENV,
    });
    return { user, token: userToken };
  };
}
