function Set(){
  //A set: unordered collection of unique items.
  //we could use an array to implement our set.
  //an object works fine since its keys are always unique.
  let items = {};
  this.has = function(value){
    //return value in items;
    return items.hasOwnProperty(value);
  };

  this.add = function(value){
    if(!this.has(value)){
      items[value] = value;
      return true;
    }
    return false;
  };

  this.delete = function(value){
    if(this.has(value)){
      delete items[value];
      return true;
    }
    return false;
  };

  this.print = function(){
    console.log(items);
  };

  this.clear = function(){
    items = {};
  };
}