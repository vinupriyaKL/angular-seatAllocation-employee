import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationListingComponent } from './allocation-listing.component';

describe('AllocationListingComponent', () => {
  let component: AllocationListingComponent;
  let fixture: ComponentFixture<AllocationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
