;(function(global, factory){
    factory(global);
}(typeof window !== 'undefined'? window : this, function(window, noGlobal) {
    var jQuery = function() {
        return new jQuery.fn.init( selector, context);
    };
    jQuery.fn = jQuery.prototype = {};

    // 1.核心方法
    // 2.回调系统
    // 3.异步队列
    // 4.数据缓存
    // 5.队列操作
    // 6.选择器引
    // 7.属性操作
    // 8.节点遍历
    // 9.文档处理
    // 10.样式操作
    // 11.属性操作
    // 12.事件体系
    // 13.AJAX交互
    // 14.动画引擎

    return jQuery;
}))

console.warn(jQuery);