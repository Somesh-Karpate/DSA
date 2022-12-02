class Queue{
    constructor(capacity){
        this.capacity = capacity;
        this.front = 0;
        this.size = 0;
        this.arr = [];
    }
    isFull(){
        return this.size==this.capacity;
    }

    isEmpty(){
        return this.size == 0;
    }
    enqueue(item){
        if(this.isFull()){
            console.log("Queue is full");
            return;
        }
        let rear = (this.front + this.size - 1) % this.capacity;
        rear = (rear + 1) % this.capacity;
        this.arr[rear] = item;
        this.size++;
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        let item = this.arr[this.front];
        this.front = (this.front+1)%this.capacity;
        this.size--;
        console.log(item);
    }

    getFront(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        return this.arr[this.front];
    }

    getRear(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        let rear = (this.front + this.size - 1) % this.capacity;
        return this.arr[rear];
    }
}
let queue = new Queue(4);
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.isFull());
queue.dequeue();
console.log(queue.getFront());
console.log(queue.getRear());


