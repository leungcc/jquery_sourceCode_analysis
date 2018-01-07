// end 的实现
jQuery.fn.end = function() {
    return this.prevObject || this.constructor(null);
}

// prevObject在什么情况下会产生？
jQuery.fn.find = function(selector) {
    // ..省略
    // 通过 sizzle选择器，返回结果集
    jQuery.find(selector, self[i], ret);

    ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);

    ret.selector = this.selector ? this.selector + " " + selector : selector;

    return ret
}

jQuery.fn.pushStack = function(elems) {
    // Build a new jQuery matched
    var ret = jQuery.merge(this.constructor(), elems);
    // Add the old object onto the stack
    ret.prevObject = this;
}
/**
 * 、首先构建一个新的jQuery对象，因为constructor是指向构造器的，
 * 所以这里就等同于调用jQuery()方法了，返回了一个新的jQuery对象；

2、然后用jQuery.merge语句把elems节点合并到新的jQuery对象上；

3、最后给返回的新jQuery对象添加prevObject属性，我们看到prevObject其实还是当前jQuery的一个引用罢了，
所以也就是为什么通过prevObject能取到上一个合集的原因了。
 */