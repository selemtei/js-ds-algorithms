this.linearSearch = function(item, array){
  for(var index = 0; index < array.length; index++){
    if(item === array[index]){
      return index;
    }
  }
  return -1;
};