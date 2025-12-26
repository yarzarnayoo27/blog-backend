import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService {
  constructor(
    // Injecting Auth Service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  /**
   * The method to get all the users from the database
   */
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

  /**
   * Find a single user using the ID of the user
   */
  public findOneById(id: number) {
    return { firstname: 'John', lastname: 'Doe' };
  }
}
