import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserServiceService } from './user-service.service';


@Controller()
export class UserServiceController {
  constructor(private readonly authServiceService: UserServiceService) {}

  @MessagePattern({ cmd: 'get_users' })
  getUsers() {
    return this.authServiceService.getUsers();
  }
}
