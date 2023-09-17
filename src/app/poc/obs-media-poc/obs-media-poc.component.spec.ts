import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsMediaPocComponent } from './obs-media-poc.component';

describe('ObsMediaPocComponent', () => {
  let component: ObsMediaPocComponent;
  let fixture: ComponentFixture<ObsMediaPocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObsMediaPocComponent]
    });
    fixture = TestBed.createComponent(ObsMediaPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
