function Set(){
  //A set: unordered collection of unique items.
  //we could use an array to implement our set.
  //an object works fine since its keys are always unique.
  let items = {};
  this.has = function(value){
    //return value in items;
    return items.hasOwnProperty(value);
  };
  
}