import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

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
  findUser(@Param('id') id: string) {
    return this.usersService.findUser(+id);
  }

  /**
   * POST /users
   * Creates a user using POST method
   */
  @Post()
  createUser(
    @Body() user: { name: string; email: string; role: 'STUDENT' | 'ADMIN' },
  ) {
    this.usersService.createUser(user);
    return user;
  }

  /**
   * PATCH /users/:id
   * Partially updates details of a user
   */
  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body()
    userDetails: { name?: string; email?: string; role?: 'STUDENT' | 'ADMIN' },
  ) {
    return this.usersService.updateUser(+id, userDetails);
  }

  /**
   * DELETE /users/:id
   * Deletes users by their ID
   */
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
