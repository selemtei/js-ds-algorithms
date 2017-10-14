function HashTable(){
  var table = [];

  var loseHashCode = function(key){
    var hash = 0;
    for(var index = 0; index < key.length; index++){
      hash = hash + key.charCodeAt(index);
    }
    return hash % 37;
  };

  this.put = function(key, value){
    var position = loseHashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };

  this.get = function(key){
    return table[loseHashCode(key)];
  };

  this.remove() = function(key){
    table[loseHashCode(key)] = undefined;
  };

  this.print = function(){
    for(var index = 0; index < table.length; index++){
      if(table[index] !== undefined){
        console.log(index + ": " + table[index]);
      }
    }
  };
}