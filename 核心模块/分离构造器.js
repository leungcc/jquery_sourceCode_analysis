/**
 * 首先改造 jQuery 无 new 的格式，我们可以通过 instanceof 判断 this 是否为当前实例
 */
var $$ = ajQuery = function(selector) {
    if(!this instanceof ajQuery) {
        return new ajQuery(selector)
    }
    this.selector = selector;
    return this;
}

/**
 * ！！！千万不要写成这个样子，无限递归自己
 */
var $$ = ajQuery = function(selector) {
    this.selector = selector;
    return new ajQuery(selector);
}

