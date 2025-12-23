import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { GetUsersQueryDto } from './dtos/get-users-query.dto';

@Controller('users')
export class UsersController {
  constructor(
    // Injecting Users Service
    private readonly usersService: UsersService,
  ) {}

  @Get('/{:id}')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query() getUsersQueryDto: GetUsersQueryDto,
  ) {
    let { limit, page } = getUsersQueryDto;
    return this.usersService.findAll(getUsersParamDto, limit, page);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {}

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {}
}
