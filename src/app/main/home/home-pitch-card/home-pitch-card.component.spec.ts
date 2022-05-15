import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePitchCardComponent } from './home-pitch-card.component';

describe('HomePitchCardComponent', () => {
  let component: HomePitchCardComponent;
  let fixture: ComponentFixture<HomePitchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePitchCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePitchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
