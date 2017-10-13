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

  this.sizePolyfill = function(){
    let count = 0;
    for(let key in items){
      if(items.hasOwnProperty(key)){
        count = count + 1;
      }
    }
    return count;
  };

  //Object.keys might not work in newer version of browsers. 
  this.size = function(){
    return Object.keys(items).length || sizePolyfill();
  };

  //valuesPolyfill method
  this.valuesPolyfill  = function(){
    let values = [];
    for(let key in items){
      if(items.hasOwnProperty(key)){
        values.push(items[key]);
      }
    }
    return values;
  };

  this.values = function(){
    let values = [];
    let arr_of_keys = Object.keys(items);
    for(let index = 0; index < arr_of_keys.length; index++){
      values.push(items[arr_of_keys[index]]);
    }
    return values;
  };

  this.union = function(otherSet){
    let unionSet = new Set();
    let values = this.values();
    
    for(let index = 0; index < values.length; index++){
      unionSet.add(values[index]);
    }

    values = otherSet.values();
    for(let index = 0; index < values.length; index++){
      unionSet.add(values[index]);
    }
    return unionSet;
  };

  this.intersection = function(otherSet){
    let intersectionSet = new Set();
    let values = this.values();

    for(let index = 0; index < values.length; index++){
      if(otherSet.has(values[index])){
        intersectionSet.add(values[index]);
      }
    }
    return intersectionSet;
  };
}