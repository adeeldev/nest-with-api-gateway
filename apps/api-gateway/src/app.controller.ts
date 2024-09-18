import { Controller, Get } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  private userServiceClient: ClientProxy;
  private authServiceClient: ClientProxy;

  constructor() {
    // Connect to the users-service
    this.userServiceClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { port: 4001 },
    });

    // Connect to the orders-service
    this.authServiceClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { port: 4002 },
    });
  }

  @Get('users')
  getUsers() {
    return this.userServiceClient.send({ cmd: 'get_users' }, {});
  }

  @Get('auth')
  getAuth() {
    return this.authServiceClient.send({ cmd: 'get_auth' }, {});
  }
}
