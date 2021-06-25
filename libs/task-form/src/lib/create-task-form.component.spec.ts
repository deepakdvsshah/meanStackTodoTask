import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AddTaskState } from './+state/add-task.state';
import { CreateTaskFormComponent } from './create-task-form.component';

describe('CreateTaskFormComponent', () => {
  let component: CreateTaskFormComponent;
  let fixture: ComponentFixture<CreateTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, NgxsModule.forRoot([AddTaskState])],
      declarations: [CreateTaskFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
