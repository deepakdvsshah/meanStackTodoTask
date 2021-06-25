import { Injectable } from '@nestjs/common';
import { TaskObj } from './api-interfaces';
@Injectable()
export class AppService {
  data = [];
  getData() {
    return this.data;
  }
  setData(task: TaskObj) {
    this.data.push(task);
    return this.data;
  }
}
