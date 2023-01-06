import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessTrackerComponent } from './happiness-tracker.component';

describe('HappinessTrackerComponent', () => {
  let component: HappinessTrackerComponent;
  let fixture: ComponentFixture<HappinessTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappinessTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
