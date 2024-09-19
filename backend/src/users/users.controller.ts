import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /**
   * GET /users
   * Gets a list of users
   */
  @Get()
  findAllUsers(@Query('role') role?: 'ADMIN' | 'STUDENT') {
    return this.usersService.findAllUsers(role);
  }

  /**
   * GET /users/:id
   * Gets a single user based on route parameter
   */
  @Get(':id')
  findUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findUser(id);
  }

  /**
   * POST /users
   * Creates a user using POST method
   */
  @Post()
  createUser(@Body() user: CreateUserDto) {
    this.usersService.createUser(user);
    return user;
  }

  /**
   * PATCH /users/:id
   * Partially updates details of a user
   */
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    userDetails: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, userDetails);
  }

  /**
   * DELETE /users/:id
   * Deletes users by their ID
   */
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
