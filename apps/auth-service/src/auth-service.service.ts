import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceService {
  checkAuth(): string {
    return 'Your verification in process. Please wait.';
  }
}
