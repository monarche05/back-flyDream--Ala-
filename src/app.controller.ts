import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';

import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // ALL GET QUERIES
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
