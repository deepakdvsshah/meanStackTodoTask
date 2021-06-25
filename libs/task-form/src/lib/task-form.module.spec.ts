import { async, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskFormModule } from './task-form.module';

describe('TaskFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TaskFormModule, NgbModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(TaskFormModule).toBeDefined();
  });
});
