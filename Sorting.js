function ArrayList(){
  var array = [];

  this.insert = function(item){
    array.push(item);
  };

  this.toString = function(){
    return array.join();
  };

  var swap = function(array, index_1, index_2){
    var aux = array[index_1];
    array[index_1] = array[index_2];
    array[index_2] = aux;
    //ES2015 swap
    //[array[index_1], array[index_2]] = [array[index_2], array[index_1]];
  };

  this.bubbleSort = function(){
    var length = array.length;
    for(var index = 0; index < length; index++){
      for(var j = 0; j < length - 1 - index; j++){
        if(array[j] > array[j + 1]){
          swap(array, j, j + 1);
        }
      }
    }
  };

  this.selectionSort = function(){
    var length = array.length, minIndex;
    for(var index = 0; index < length - 1; index++){
      minIndex = index;
      for(var j = index; j < length; j++){
        if(array[minIndex] > array[j]){
          minIndex = j;
        }
      }
      if(index !== minIndex){
        swap(index, minIndex);
      }
    }
  };
}