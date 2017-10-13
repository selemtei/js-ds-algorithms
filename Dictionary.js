function Dictionary(){
  var items = {};

  this.has = function(){
    return key in items;
  };

  this.set = function(key, value){
    items[key] = value;
  };

  this.delete = function(){
    if(this.has(key)){
      delete items[key];
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
}