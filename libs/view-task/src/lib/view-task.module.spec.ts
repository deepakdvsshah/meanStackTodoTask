import { async, TestBed } from '@angular/core/testing';
import { ViewTaskModule } from './view-task.module';

describe('ViewTaskModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ViewTaskModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ViewTaskModule).toBeDefined();
  });
});
