this.linearSearch = function(item, array){
  for(var index = 0; index < array.length; index++){
    if(item === array[index]){
      return index;
    }
  }
  return -1;
};

//assumes the array is sorted. 
this.binarySearch = function(array, item){
  var low = 0,
  high = array.length - 1,
  mid, element;

  while(low <= high){
    mid = Math.floor((low + high) / 2);
    element = array[mid];

    if(element < item){
      low = mid + 1;
    }else if(element > item){
      high = mid - 1;
    }else{
      return mid;
    }
  }
  return -1;
};