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
  
}