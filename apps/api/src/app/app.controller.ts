import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { TaskObj } from './api-interfaces';
@ApiTags('Task-Api')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('get-data')
  getData() {
    return this.appService.getData();
  }

  @Post('set-data')
  @ApiBody({ type: TaskObj })
  setData(@Body() taskObj: TaskObj) {
    return this.appService.setData(taskObj);
  }

}
