import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumingComponent } from './resuming.component';

describe('ResumingComponent', () => {
  let component: ResumingComponent;
  let fixture: ComponentFixture<ResumingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
