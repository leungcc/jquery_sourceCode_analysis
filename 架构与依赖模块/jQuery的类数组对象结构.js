/**
 * jQuery的无new构建原理
 */

 /**
  * 函数 aQuery() 内部首先保证了必须是通过 new 操作符构建。这样就能保证当前构建的是一个带有 this 的实例对象。
    每次调用 aQuery 都相当创建了一个新的实例
  */

  var aQuery = function(selector) {
      // 强制为对象
      if(!(this instanceof aQuery)) {
          return new aQuery(selector);
      }
    var elem = document.getElementById(/[^#].*/.exec(selector)[0]);
    
    this.length = 1;
    this[0] = elem;
    this.context = document;
    this.selector = selector;
    this.get = function(num) {
        return this[num];
    }
  }

  var xc = aQuery("#xc");
  console.log(xc);