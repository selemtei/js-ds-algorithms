function HashTable() {
  var table = [];

  var loseHashCode = function (key) {
    var hash = 0;
    for (var index = 0; index < key.length; index++) {
      hash = hash + key.charCodeAt(index);
    }
    return hash % 37;
  };

  this.put = function (key, value) {
    var position = loseHashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };

  this.get = function (key) {
    return table[loseHashCode(key)];
  };

  this.remove() = function (key) {
    table[loseHashCode(key)] = undefined;
  };

  this.print = function () {
    for (var index = 0; index < table.length; index++) {
      if (table[index] !== undefined) {
        console.log(index + ": " + table[index]);
      }
    }
  };
}


function HashTableSeparateChaining() {
  var table = [];

  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return '[' + this.key + ' - ' + this.value + ']';
    };
  };

  var loseHashCode = function (key) {
    var hash = 0;
    for (var index = 0; index < key.length; index++) {
      hash = hash + key.charCodeAt(index);
    }
    return hash % 37;
  };

  var hashCode = function (key) {
    return loseHashCode(key);
  };

  this.put = function (key, value) {
    var position = hashCode(key);

    if (table[position] == undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };

  this.get = function (key) {
    var position = hashCode(key);

    if (table[position] !== undefined) {
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      //handles the last and first only element. 
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  };

  this.remove = function (key) {
    var position = hashCode(key);
    if (table[position] !== undefined) {
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  };
}

function HashLinearProbing() {
  var table = [];

  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return '[' + this.key + ' - ' + this.value + ']';
    };
  };

  var loseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash = hash + key.charCodeAt(i);
    }
    return hash % 37;
  };

  var hashCode = function (key) {
    return loseHashCode(key);
  };

  this.put = function(key, value){
    var position = loseHashCode(key);
    if(table[position] == undefined){
      table[position] = new ValuePair(key, valeu);
    }else{
      var index = ++position;
      while(table[index] != undefined){
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  }

  this.get = function(key){
    var position = hashCode(key);
    if(table[position] !== undefined){
      if(table[position].key === key){
        return table[position].value;
      }else{
        var index = ++position;
        while(table[index] === undefined || table[index].key !== key){
          index++;
        }
        if(table[index].key === key){
          return table[index].value;
        }
      }
    }
    return undefined;
  }
}

function betterHashCode(key){
  var hash = 5381;
  for(var index = 0; index < key.length; index++){
    hash = hash * 33 + key.charCodeAt(index);
  }
  return hash % 1013;
}