import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['STUDENT', 'ADMIN'], {
    message: 'Valid role required.',
  })
  role: 'STUDENT' | 'ADMIN';
}
