import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  NgModule
} from '@angular/core';
import {CommonModule} from '@angular/common/common';
import WaveSurfer from 'wavesurfer.js';
import { WaveSurferParams } from 'wavesurfer.js/types/params';
import {NgxWavesurferService} from './ngx-wavesurfer.service';

@Component({
  selector: 'ngx-wavesurfer',
  template: `
    <div #waveform id="waveform"></div>
  `
})
export class NgxWavesurferComponent implements AfterViewInit {
  @ViewChild('waveform') waveformEl: ElementRef;
  @Input() audioURL: string;
  @Input() options: WaveSurferParams;

  constructor(public waveSurferService: NgxWavesurferService) {}

  ngAfterViewInit(): void {
    if (this.options) {
      this.options.container = this.waveformEl.nativeElement;
    } else {
      this.options = {
        container: this.waveformEl.nativeElement
      };
    }
    this.waveSurferService.WaveSurfer = this.waveSurferService.create(
      this.options
    );
    this.waveSurferService.WaveSurfer.load(this.audioURL);
  }
}
