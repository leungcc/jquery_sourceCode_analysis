// jQuery 提供了 .get() :index()、:lt()、:gt()、:even()及:odd()这类索引值相关的选择器
jQuery.prototype.get = function(num) {
    return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
}
// num < 0 会倒序寻找 DOM
// 由于是数组关系，所以有几个快速方法，比如头跟尾的取值：
var xxx = {
    first: function() {
        return this.eq(0);
    },
    last: function() {
        return this.eq(-1);
    }
}