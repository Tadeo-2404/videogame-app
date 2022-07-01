import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMonthComponent } from './popular-month.component';

describe('PopularMonthComponent', () => {
  let component: PopularMonthComponent;
  let fixture: ComponentFixture<PopularMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
