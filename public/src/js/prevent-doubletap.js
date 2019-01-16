function PreventDoubleTapZoom(){

    var doubleTouchStartTimestamp = 0;
    document.addEventListener('touchstart', function(event){
        var now = +(new Date());
        if (doubleTouchStartTimestamp + 500 > now){
            event.preventDefault();
        };
        doubleTouchStartTimestamp = now;
    });
}

var doubleTapZoom = new PreventDoubleTapZoom();
