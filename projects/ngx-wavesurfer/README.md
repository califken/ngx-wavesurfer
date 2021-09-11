# NGX WaveSurfer

## Check out the demos for Usage and StackBlitz links
[NGX WaveSurfer Demos](https://ngx-wavesurfer.web.app)

## Usage
```npm install ngx-wavesurfer```

Add NgxWavesurferModule to your app.module imports

## ngxWaveSurfer Component
``` <ngx-wavesurfer></ngx-wavesurfer>```
- Only place a single ngx-wavesurfer component per host component
- Inject the ngx-wavesurfer service
- Declare the service as a provider in the host component
- This instance's WaveSurfer object is available via the waveSurferService.WaveSurfer

## ngxWaveSurfer Service
``` providers: [ngxWaveSurferService] ```
- Inject the ngx-wavesurfer service into your component
- Declare the service as a provider within the scope of the component
- Call the service method "create", passing an object with the parameter for "container", and that container's selector ('#waveform', etc..)
- The create() method returns a full WaveSurfer instance
