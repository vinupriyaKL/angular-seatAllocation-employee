import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatAllocationFormComponent } from './seat-allocation-form.component';

describe('SeatAllocationFormComponent', () => {
  let component: SeatAllocationFormComponent;
  let fixture: ComponentFixture<SeatAllocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatAllocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatAllocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
