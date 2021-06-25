
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Select, Store } from '@ngxs/store';
import { AddTask, GetFullTaskList } from './+state/add-task.action';
import { AddTaskState, AddTaskStateModel } from './+state/add-task.state'
import { Observable } from 'rxjs';
import { TaskObj } from '@create-task/openapi/task';
@Component({
  selector: 'create-task-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.scss']
})
export class CreateTaskFormComponent implements OnInit {
  public createTaskForm: FormGroup;
  isSubmit = true;
  model!: NgbDateStruct;
  taskObj: TaskObj[] = [];
  validDateRangeData!: TaskObj[];
  selectedLevel: string;
  isChartShow: boolean = false;
  minDate!: NgbDateStruct;
  maxDate!: NgbDateStruct;
  @Select(AddTaskState.viewTask) viewTask$!: Observable<AddTaskStateModel>;

  constructor(
    private formBuilder: FormBuilder, private store: Store
  ) {
    this.createTaskForm = this.formBuilder.group({
      description: [null, Validators.required],
      reminder: [Date, Validators.required],
      due: [Date, Validators.required],
      category: ''
    });
    this.selectedLevel = this.taskCategory[0];
    this.store.dispatch(new GetFullTaskList()).subscribe((data) => {
      this.ShowChart(data?.addList?.viewFullTaskList);
    });
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
  }
  ngOnInit(): void {
    this.createTaskForm.valueChanges.subscribe(() => {
      this.isSubmit = true
      this.maxDate = this.createTaskForm.controls.due.value;
    });
  }
  changeCategory(e: any) {
    this.selectedLevel = e.target.value;
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  taskCategory = ['Mail', 'Interview', 'Call', 'Meeting', 'Travel', 'Other'];
  barChartLabels: Label[] = []
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
  ];

  createTask() {
    let task = {
      description: this.createTaskForm.controls.description.value,
      reminder: this.toModel(this.createTaskForm.controls.reminder.value),
      due: this.toModel(this.createTaskForm.controls.due.value),
      category: this.selectedLevel,
    };
    this.taskObj.push(task);
    this.store.dispatch(new AddTask(task)).subscribe((data) => {
      this.ShowChart(data?.addList?.viewFullTaskList);
    });
    this.createTaskForm.reset();
    this.isSubmit = false
  }
  ShowChart(taskDataForChart: any) {
    this.isChartShow = true;
    this.barChartLabels = this.taskCategory;
    let startDate = moment().format('YYYY-MM-DD');
    let endDate = moment().add(7, 'd').format('YYYY-MM-DD');
    this.validDateRangeData = taskDataForChart.filter(function (el: any) {
      if (el.due >= startDate && el.due <= endDate) {
        return el;
      }
    });
    let taskData = []
    for (let i = 0; i < this.barChartLabels.length; i++) {
      let tempArrayCount = 0;
      for (let value of this.validDateRangeData) {
        if (value?.category === this.barChartLabels[i]) {
          tempArrayCount++
        }
      }
      taskData[i] = tempArrayCount;
    }
    this.barChartData = [
      { data: taskData, label: 'More Task', backgroundColor: '#0d6efd' }
    ];
  }
  toModel(date: NgbDateStruct): string {
    return date ? date.year + "-" + ('0' + date.month).slice(-2) + "-" + ('0' + date.day).slice(-2) : '';
  }

}
