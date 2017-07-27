(function(window){
    var Init=window.Init;
    Init.fn.extend({
        on:function(Name,callback){
            return  this.each(function(){
                this.addEventListener(Name,callback);
            })
        },
        off:function(Name,callback){
            return  this.each(function(){
                this.removeEventListener(Name,callback);
            })
        },
    });


    Init.myEach(('abort,blur,cancel,canplay,canplaythrough,change,click,close,contextmenu,cuechange,dblclick,drag,dragend,'
    +'dragenter,dragleave,dragover,dragstart,drop,durationchange,emptied,ended,error,focus,input,invalid,keydown,keypress,'+'keyup,load,loadeddata,loadedmetadata,loadstart,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,'+'mousewheel,pause,play,playing,progress,ratechange,reset,resize,scroll,seeked,seeking,select,show,stalled,submit,suspend,'+'timeupdate,toggle,volumechange,waiting,auxclick,gotpointercapture,lostpointercapture,pointercancel,pointerdown,pointerenter,'+'pointerleave,pointermove,pointerout,pointerover,pointerup,beforecopy,beforecut,beforepaste,+copy,cut,paste,search,selectstart,'+'wheel,webkitfullscreenchange,webkitfullscreenerror').split(","),function(i,v){
        Init.fn[v]=function(callback){
            return this.on(v,callback)
        }
    });
})(window);
