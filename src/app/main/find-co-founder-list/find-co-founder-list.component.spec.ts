import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCoFounderListComponent } from './find-co-founder-list.component';

describe('FindCoFounderListComponent', () => {
  let component: FindCoFounderListComponent;
  let fixture: ComponentFixture<FindCoFounderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCoFounderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCoFounderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
