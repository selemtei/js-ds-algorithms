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
  };

  this.bubbleSort = function(){
    var length = array.length;
    for(var index = 0; index < length; index++){
      for(var j = 0; j < length - 1; j++){
        if(array[j] > array[j + 1]){
          swap(array, j, j + 1);
        }
      }
    }
  };
}