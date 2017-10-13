function Dictionary(){
  var items = {};
  var size = 0;

  this.has = function(){
    return key in items;
  };

  this.set = function(key, value){
    items[key] = value;
    size = size + 1;
  };

  this.delete = function(){
    if(this.has(key)){
      delete items[key];
      size = size + 1;
      return true;
    }
    return false;
  };

  this.get = function(key){
    return this.has(key) ? items[key] : "no associated value";
  };

  this.values = function(){
    var values = [];
    for(var key in items){
      if(this.has(key)){
        values.push(items[key]);
      }
    }
    return values;
  };

  this.clear = function(){
    items = {};
    size = 0;
  };
  
  this.keys = function(){
    return Object.keys(items);
  };

  this.print = function(){
    console.log(items);
  };

  this.getSize = function(){
    return size;
  };
}
