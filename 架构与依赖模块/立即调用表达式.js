/**
 * 任何库与框架设计的第一个要点就是解决 命名空间与变量污染的问题。
 * jQuery 就是利用了 JavaScript函数作用域的特性，采用了立即调用表达式包裹了自身的方法来解决这个问题。
 */

// jQuery的立即调用表达式写法有三种

//------- 写法1 -------
(function(window, factory) {

}(this, function() {
    return function() {
        // jQuery调用
    }
}))


//------- 写法2 -------
var factory = function() {
    return function() {
        // 执行方法
    }
}
var jQuery = factory();
/**
 * 上面的代码和方法1是等同的。
 * 但是这个 factory 有点变成了简单的工厂方法模式，需要自己调用，不像是一个单例的jQuery类，
 * 所以我们需要改成自执行，而不是另外调用。
 */


 //------- 写法3 -------
 (function(window, undefined) {
    var jQuery = function() {
        // ...
    }
    window.jQuery = window.$ = jQuery;
 }(window));
// 自动初始化这个函数，让其只构建一次。
/**
 * 1. window 和 undefined 都是为了减少变量查找所经过的 scope 作用域。
 * 当 window 通过传递给闭包内部之后，在闭包内部使用它的时候，可以把它当成一个局部变量，
 * 显然比原先在 window scope 下查找的时候要快一些
 * 
 * 2. undefined 也是同样的道理，其实这个 undefined 并不是 JavaScript 数据类型的 undefined，
 * 而是一个普普通通的变量名。只是因为没给它传递值，它的值就是 undefined，undefined 并不是 JavaScript 保留字
 */