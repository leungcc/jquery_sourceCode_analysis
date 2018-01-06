jQuery.ready.promise = function( obj ) {
    if ( !readyList ) {
        readyList = jQuery.Deferred();
        if ( document.readyState === "complete" ) {
            // Handle it asynchronously to allow scripts the opportunity to delay ready
            setTimeout( jQuery.ready );
        } else {
            document.addEventListener( "DOMContentLoaded", completed, false );
            window.addEventListener( "load", completed, false );
        }
    }
    return readyList.promise( obj );
};


/**
 * 原理就是对于 IE 在非 iframe 内时，只有不断地通过能否执行 doScroll 判断 DOM 是否加载完毕。
 * 在上述中间隔 50 毫秒尝试去执行 doScroll，注意，由于页面没有加载完成的时候，调用 doScroll 会导致异常，所以使用了 try -catch 来捕获异常。
 * 
 * 结论：所以总的来说当页面 DOM 未加载完成时，调用 doScroll 方法时，会产生异常。那么我们反过来用，如果不异常，那么就是页面DOM加载完毕了。
 */
var top = false;
try {
    top = window.frameElement == null && document.documentElement;
} catch(e) {}
if ( top && top.doScroll ) {
    (function doScrollCheck() {
        if ( !jQuery.isReady ) {
            try {
                // Use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                top.doScroll("left");
            } catch(e) {
                return setTimeout( doScrollCheck, 50 );
            }
            // detach all dom ready events
            detach();

            // and execute any waiting functions
            jQuery.ready();
        }
    })();
}