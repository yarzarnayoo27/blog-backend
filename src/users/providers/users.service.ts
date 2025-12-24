import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    // Injecting Auth Service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

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
