import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewTaskComponent } from './view-task.component';
import { NgxsModule } from '@ngxs/store';
import { ViewTaskState } from './+state/view-task.state'

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([ViewTaskState]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ViewTaskComponent }
    ]),
  ],
  declarations: [
    ViewTaskComponent
  ],
})
export class ViewTaskModule { }
