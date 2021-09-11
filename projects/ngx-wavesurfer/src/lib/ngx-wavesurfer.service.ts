import {
  Injectable
} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { WaveSurferParams } from 'wavesurfer.js/types/params';
@Injectable({
  providedIn: 'any'
})
export class NgxWavesurferService {
  public waveSurferOptions: WaveSurferParams;
  public WaveSurfer: WaveSurfer;
  public random;

  constructor() {
    if (!this.random) {
      this.random = Math.random();
    }
  }

  getOptions() {
    return this.waveSurferOptions;
  }

  getWaveSurfer() {
    return this.WaveSurfer;
  }

  create(waveSurferOptions: WaveSurferParams) {
    this.WaveSurfer = WaveSurfer.create(waveSurferOptions);
    return this.WaveSurfer;
  }

  getServiceInfo() {
    console.log(this.WaveSurfer, this.waveSurferOptions, this.random);
  }
}
