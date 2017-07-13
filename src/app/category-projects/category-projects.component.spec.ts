import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProjectsComponent } from './category-projects.component';

describe('CategoryProjectsComponent', () => {
  let component: CategoryProjectsComponent;
  let fixture: ComponentFixture<CategoryProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
