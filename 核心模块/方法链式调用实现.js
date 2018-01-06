/**
 * 如果需要链式的处理，只需要在方法内部方法当前的这个实例对象this就可以了，
 * 因为返回当前实例的this，从而又可以访问自己的原型了，这样的就节省代码量
 */
var $$ = ajQuery = function(selector) {
    return new ajQuery.fn.init(selector);
}

ajQuery.fn = ajQuery.prototype = {
    name: 'aaron',
	init: function(selector) {
		this.selector = selector;
		return this;
	},
	constructor: ajQuery
}

ajQuery.fn.init.prototype = ajQuery.fn

ajQuery.fn.setName = function(myName) {
	this.myName = myName
	return this;
}

ajQuery.fn.getName = function() {
	$("#aaron").html(this.myName)
	return this;
}

$$().setName('xiaoha').getName();

/**
 * 每一个构造函数都有一个prototype对象，函数的prototype对象存在一个属性constructor，这个属性是一个指针，指向构造函数。

   因为我们使用字面量的形式重新定义了ajQuery的prototype对象，所以prototype里面的constructor属性我们必须自己重新定义
 */