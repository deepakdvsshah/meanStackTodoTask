import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetTaskList } from './+state/view-task.action';
import { ViewTaskState, ViewTaskStateModel } from './+state/view-task.state';
import * as moment from 'moment';
import { TaskObj } from '@create-task/openapi/task';

@Component({
  selector: 'create-task-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  @Select(ViewTaskState.getTaskList) getTaskList$!: Observable<ViewTaskStateModel>;
  taskLists!: Array<TaskObj>;
  todayDate: string;

  constructor(private store: Store) {
    this.todayDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit(): void {
    this.store.dispatch(new GetTaskList()).subscribe((data) => {
      this.taskLists = data?.getList?.viewTaskList;
    });
  }

}
