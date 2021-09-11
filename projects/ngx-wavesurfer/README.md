# ngxWaveSurfer
## ngxWaveSurfer Component
``` <ngx-wavesurfer></ngx-wavesurfer>```
- Only place a single ngx-wavesurfer component per host component
- Pass your audio URL as the component's audioURL input parameter
- Inject the ngx-wavesurfer service
- Declare the service as a provider in the host component
- This instance's WaveSurfer object is available via the waveSurferService.WaveSurfer

## ngxWaveSurfer Service
``` providers: [ngxWaveSurferService] ```
- Inject the ngx-wavesurfer service into your component
- Declare the service as a provider within the scope of the component
- Call the service method "create", passing an object with the parameter for "container", and that container's selector ('#waveform', etc..)
- Interact with WaveSurfer via the service
