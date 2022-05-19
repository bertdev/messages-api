import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'opa';
  }

  @Post()
  createMessages() {}

  @Get('/:id')
  getMessage() {}
}
