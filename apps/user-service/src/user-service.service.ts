import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServiceService {
  getUsers(): any {
    return [{ id: 1, name: 'User1' }, { id: 2, name: 'User2' }]
  }
}
