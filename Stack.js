function Stack(){
    //properties and methods go here!
    //we don't need to declare a pointer variable
    //arrays in js don't need to be declared with a fixed size.

    let items = [];

    this.push = function(element){
        items.push(element);
    };
    
    this.pop = function(){
        let value = this.isEmpty() ? "stack was empty already!" : items.pop();
        return value;
    };
    
    this.peek = function(){
        return items[items.length - 1];
    };

    this.isEmpty = function(){
        return items.length === 0;
    };

    this.size = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    };

    this.print = function(){
        console.log(items.toString());
    };
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(12);
stack.push(5);
stack.push(9);
stack.push(1);
stack.push(22);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());

//refresh on some stack problems in book.

/* The Equivalent ES6 syntax.
class Stack(){
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    //other methods... 
}
*/