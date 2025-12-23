import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get('/{:id}')
  public getUsers(@Param() getUsersParamDto: GetUsersParamDto) {
    console.log(getUsersParamDto);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {}

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {}
}
