# backgroundVideo

A method for making a loop from video as background

## Examples

```code
$("#test").backgroundVideo({
    autoplay: true,
    controls: false,
    //height: false,
    //width: false,
    crossOrigin: false,
    buffered: false, // Start and End time in the console
    preload: false, // "auto" | "metadata" | "none"
    muted: true,
    loop: true,
    poster: "path/to/image-file",
    notSupportedText: "Your browser does not support HTML5 video.",
    settingID: "myVideo",
    mpeg: "path/to/mpeg-file",
    mp4: "path/to/mp4-file",
    webm: "path/to/webm-file",
    ogg: "path/to/ogg-file",
    quicktime: "path/to/quicktime-file",
    x_msvideo: "path/to/x-msvideo-file",
    m4v: "path/to/m4v-file",
    rtf: "path/to/rtf-file",
    track: false,
    track_src: "path/to/vvt-file",
    track_kind: "subtitle",
    track_srclang: "en",
    track_label: "test"
});
```