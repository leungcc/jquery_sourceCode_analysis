var $$ = ajQuery = function(selector) {
    return new ajQuery.fn.init(selector);
}

ajQuery.fn = ajQuery.prototype = {
	name: 'aaron',
	init: function(selector) {
		this.selector = selector;
		return this;
	},
    constructor: ajQuery,
    
    each: function(callback, args) {
        return ajQuery.each(this, callback, args);
    }
}


ajQuery.fn.init.prototype = ajQuery.fn //点睛の笔

