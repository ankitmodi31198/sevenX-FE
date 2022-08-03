import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindACoFounderFormComponent } from './find-a-co-founder-form.component';

describe('FindACoFounderFormComponent', () => {
  let component: FindACoFounderFormComponent;
  let fixture: ComponentFixture<FindACoFounderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindACoFounderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindACoFounderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
