import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupIdeaListComponent } from './startup-idea-list.component';

describe('StartupIdeaListComponent', () => {
  let component: StartupIdeaListComponent;
  let fixture: ComponentFixture<StartupIdeaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupIdeaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupIdeaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
