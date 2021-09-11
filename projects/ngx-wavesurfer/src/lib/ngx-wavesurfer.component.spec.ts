import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWavesurferComponent } from './ngx-wavesurfer.component';

describe('NgxWavesurferComponent', () => {
  let component: NgxWavesurferComponent;
  let fixture: ComponentFixture<NgxWavesurferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWavesurferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWavesurferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
