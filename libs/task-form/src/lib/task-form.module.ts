import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateTaskFormComponent } from './create-task-form.component';
import { ChartsModule } from 'ng2-charts';
import { NgxsModule } from '@ngxs/store';
import { AddTaskState } from './+state/add-task.state';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forFeature([AddTaskState]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CreateTaskFormComponent }
    ]),
  ],
  declarations: [
    CreateTaskFormComponent
  ],
})
export class TaskFormModule { }
