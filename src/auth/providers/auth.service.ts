import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    // Injecting Users Service
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
}
