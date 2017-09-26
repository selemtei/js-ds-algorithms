function Queue(){
    //properties and methods go here... 
    //enqueue elements from the end
    //dequeue elements from the front
    let items = [];

    this.enqueue = function(element){
        items.push(element);
    }
    
    //I don't think it has a O(1) runtime.
    this.dequeue = function(){
        return items.shift();
    }

    this.front = function(){
        return items[0];
    }

    this.isEmpty = function(){
        return items.length === 0;
    }

    this.size = function(){
        return items.length;
    }

    this.print = function(){
        console.log(items.toString());
    }
}

let queue = new Queue();
console.log(queue.isEmpty());

//ES6 Syntax
//WeakMap-> keeps the items property private.
//Outer Function or Closure->  encapsulates the Queue class. 

let Queue2 = (function () {
    const items = new WeakMap();

    class Queue2{
        constructor(){
            items.set(this, []);
        }
        enqueue(element){
            let q_elem = items.get(this);
            q_elem.push(element);
        }
        dequeue(){
            let q_elem = items.get(this);
            let output = q_elem.shift();
            return output;
        }
        //other methods keep on following the same format.
    }
    return Queue2;
})();