(function ($) {

    $.fn.backgroundVideo = function (options) {

        var settings = $.extend({
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

        }, options);

        this.append('<video id=' + settings.settingID + '></video>');

        if (settings.autoplay == true) {
            
            document.getElementById('' + settings.settingID + '').setAttribute('autoplay', '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('autoplay');
        
        }

        if (settings.controls == true) {
            
            document.getElementById('' + settings.settingID + '').setAttribute('controls', '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('controls');
        
        }

        if (settings.crossOrigin != true || settings.crossOrigin != false || settings.crossOrigin != "" || settings.crossOrigin != "none") {
            
            document.getElementById('' + settings.settingID + '').setAttribute('crossOrigin', '' + settings.crossOrigin + '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('crossOrigin');
        
        }

        if (settings.buffered == true) {
            
            console.log("Start: " + document.getElementById('' + settings.settingID + '').buffered.start(0) + ", End: " + document.getElementById('' + settings.settingID + '').buffered.end(0));
        
        } else {
            
            console.log("Buffered is does not set.");
        
        }

        if (settings.preload != true || settings.preload != false || settings.preload != "" || settings.preload != "none") {
            
            document.getElementById('' + settings.settingID + '').setAttribute('preload', '' + settings.preload + '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('preload');
        
        }

        if (settings.muted == true) {
            
            document.getElementById('' + settings.settingID + '').setAttribute('muted', '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('muted');
        
        }

        if (settings.loop == true) {
            
            document.getElementById('' + settings.settingID + '').setAttribute('loop', '');
        
        } else {
            
            document.getElementById('' + settings.settingID + '').removeAttribute('loop');
        
        }

        if (settings.poster != true || settings.poster != false || settings.poster != "" || settings.poster != "none") {
            
            document.getElementById('' + settings.settingID + '').setAttribute('poster', '' + settings.poster + '');
        
        } else {

            document.getElementById('' + settings.settingID + '').removeAttribute('poster');

        }
        
        if (settings.notSupportedText != true || settings.notSupportedText != false || settings.notSupportedText != "" || settings.notSupportedText != "none") {
            
            $('#' + settings.settingID + '').append('' + settings.notSupportedText + '');

        } else {

            $('#' + settings.settingID + '').append("");

        }

        if (settings.mpeg != "" || settings.mpeg != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.mpeg + " type='video/mpeg'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.mp4 != "" || settings.mp4 != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.mp4 + " type='video/mp4'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.webm != "" || settings.webm != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.webm + " type='video/webm'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.ogg != "" || settings.ogg != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.ogg + " type='video/ogg'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.quicktime != "" || settings.quicktime != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.quicktime + " type='video/quicktime'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.x_msvideo != "" || settings.x_msvideo != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.x_msvideo + " type='video/x-msvideo'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.m4v != "" || settings.m4v != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.m4v + " type='application/octet-stream'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.rtf != "" || settings.rtf != "none") {

            $("#" + settings.settingID + "").append("<source src=" + settings.rtf + " type='application/rtf'>");

        } else {

            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");

        }

        if (settings.track == true) {
            
            $("#" + settings.settingID + "").append("<track src=" + settings.track_src + " kind=" + settings.track_kind + " srclang=" + settings.track_srclang + " label=" + settings.track_label + ">");
        
        } else {
            
            $("#" + settings.settingID + "").append("" + settings.notSupportedText + "");
        
        }

        $("#" + settings.settingID + "").css({ "position": "fixed", "top": "0", "left": "0", "min-width": "100%", "min-height": "100%" });

    };

}(jQuery));