import { TestBed } from '@angular/core/testing';

import { NgxWavesurferService } from './ngx-wavesurfer.service';

describe('NgxWavesurferService', () => {
  let service: NgxWavesurferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWavesurferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
