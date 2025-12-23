import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    console.log(getUsersParamDto, limit, page);
    return [
      { firstname: 'John', lastname: 'Doe' },
      { firstname: 'Su', lastname: 'Htet' },
    ];
  }

  /*
   * Find a user by ID
   */
  public findOneById(id: number) {
    return { firstname: 'John', lastname: 'Doe' };
  }
}
