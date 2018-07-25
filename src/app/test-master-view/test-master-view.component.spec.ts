import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMasterViewComponent } from './test-master-view.component';

describe('TestMasterViewComponent', () => {
  let component: TestMasterViewComponent;
  let fixture: ComponentFixture<TestMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
