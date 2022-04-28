import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const result = {
      msg: 'hello worlds',
    };
    return JSON.stringify(result);
  }
}
