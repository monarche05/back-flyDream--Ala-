import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoginService {
  constructor(private authService: AuthService) {}
}
