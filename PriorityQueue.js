//we are adding elements based on their priorities.
//we dequeue them normally.

//Other approach, we could simply add them then 
//dequeue them based on their priority.

function PriorityQueue(){
    let items = [];
    function QueueElement(element, priority){
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority){
        let queueElem = new QueueElement(element, priority);
        let added = false;
        for(let index = 0; index < items.length; index++){
            if(queueElem.priority < items[index].priority){
                items.splice(index, 0, queueElem);
                added = true;
                break;
            }
        }
        if(!added){
            items.push(queueElem);
        }
    };

    this.print = function(){
        for(let index = 0; index < items.length; index++){
            console.log(`${items[index].element} - ${items[index].priority}`);
        }
    };
    //complete the other methods.
    //they are the same as the queue methods we implemented.
}