import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello() {
    return this.userService.getHello();
  }

  @Post()
  postHello(@Body() body: UserService) {
    console.table(this.userService.testConsole());
    return this.userService.postHello(body);
  }
}
