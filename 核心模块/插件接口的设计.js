console.log(jQuery.prototype);
jQuery.prototype.fuxk = function() {
    alert("fuxk");
}
jQuery.prototype = {};
jQuery.fn = {};
console.log(jQuery.prototype);
var j = jQuery();
j.fuxk();
alert(jQuery().jquery)
console.log(jQuery.fn)

// 估计是 ajQuery.fn.init.prototype = ajQuery.fn;
// 所以就算把 ajQuery.prototype = {} 也不影响 