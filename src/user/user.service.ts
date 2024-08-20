import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello() {
    return '<h1>User service</h1>';
  }
  postHello(e: UserService) {
    console.log(e);
    return e;
  }

  testConsole() {
    console.log('teste console');
    return {
      teste: 'teste console',
    };
  }
}
