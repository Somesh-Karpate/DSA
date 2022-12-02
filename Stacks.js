class Stack{
    constructor(capacity){
        this.top = -1;
        this.arr = [];
        this.capacity = capacity;
    }
    push(item){
        if(this.top==this.capacity-1){
            console.log("Stack is overflow");
            return;
        }
        this.top++;
        return this.arr[this.top] = item;
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return;
        }
        let result = this.arr[this.top];
        this.top--;
        return result;
    }

    seek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return;
        }
        return this.arr[this.top]; 
    }

    size(){
        return this.top+1;
    }

    isEmpty(){
        return this.top==-1;
    }

    clear(){
        this.arr = [];
    }
}

let stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.arr);

console.log(stack.pop());
console.log(stack.seek());
console.log(stack.size());
console.log(stack.isEmpty());
stack.clear();
console.log(stack.arr);

