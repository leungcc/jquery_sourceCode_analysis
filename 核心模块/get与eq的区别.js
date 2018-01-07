// .eq() 减少匹配元素的集合，根据index索引值，精确指定索引对象。
// .get()通过检索匹配 jQuery对象得到对应的 DOM元素

// !! eq返回的是jQuery对象，get返回的是一个DOM对象

// eq()的实现原理就是在上面代码中的把eq方法内部转成jQuery对象：
jQuery.fn.eq = function(i) {
    var len = this.length,
        j = +i + (i < 0 ? len : 0);
    
    return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
}