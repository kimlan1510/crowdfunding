import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingFormComponent } from './funding-form.component';

describe('FundingFormComponent', () => {
  let component: FundingFormComponent;
  let fixture: ComponentFixture<FundingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
