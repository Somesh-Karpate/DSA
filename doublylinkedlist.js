class Node{
    constructor(value){
        this.prev = null;
        this.value = value;
        this.next = null; 
    }
}
class DoublylinkedList{
    constructor(head = null){
        this.head = head;
        this.tail = head;

        if(this.head == null){
            this.length = 0;
        }
        else{
            this.length = 1;
        }
    }

    insertAtbeginning(value){
        const newNode = new Node(value);
        
            newNode.prev = null;
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        
        this.length++;
        
    }

    insertAtindex(value,index){
        const newNode = new Node(value);
        if(index<0){
            console.log("give positive index");
            return;
        }
        
        if(index==0){
            if(this.head==null){
                this.head = newNode;
                this.tail = newNode;
                return;
            }else{
                this.insertAtbeginning(value);
                return;
            }
        }
        else if(index == this.length){
                this.append(value);
                return;
        }
        else{
        let previous = this.getAt(index - 1);
        newNode.prev = previous;
        newNode.next = previous.next;
        previous.next.prev = newNode;
        previous.next = newNode;
        
        }
        this.length++;
    }

    //adding item to the end
    append(value){
        const newNode = new Node(value);
        let list = new DoublylinkedList(newNode);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

    }

    //delete from start
    deleteFromBeginning(){
        if(this.head == null){
            console.log("list is empty");
            return;
        }else{
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return;
    }
}

    deleteFromIndex(index){
        if(index<0){
            console.log("give positive index");
            return;
        }
        if(!this.head){
            return;
        }
        if(index == 0){
            this.deleteFromBeginning();
            return;
        }
        else if(index==this.length-1){
            this.deleteFromEnd();
            return;
        }
        else{
        let previous = this.getAt(index - 1);
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;
        previous.next.prev = previous;
    }
    }

    deleteFromEnd(){
        if(this.head.next==null){
            this.head = null;
            return;
        }
        let previous = this.head;
        let current = this.head.next;
        while(current.next!==null){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous;
    }

    print(){
        let current = this.head;
        if(current == null){
            console.log("list is empty");
            return;
        }
        while(current !== null){
            console.log(`${current.prev==null?null:current.prev.value}<--${current.value}-->${current.next==null?null:current.next.value}`);
            current = current.next;
        }
    }

    getAt(index){
        let counter = 0;
        let current = this.head;
        while(current!==null){
            if(counter == index){
                return current;
            }
            counter++;
            current = current.next;
        }
        return null;
    }

}

let node = new Node(100);
// console.log(node);
let list = new DoublylinkedList(node);
list.append(200);
list.append(300);
list.print();
console.log("~~~~~~~~~~~~~~~");
list.insertAtbeginning(50);
list.print();
console.log("~~~~~~~~~~~~~~~");
// console.log(list.getAt(2));  
list.insertAtindex(55,1);
list.print();
// list.deleteFromBeginning();
// console.log("~~~~~~~~~~~~~~~");
// list.print();
// list.deleteFromIndex(2);
// console.log("~~~~~~~~~~~~~~~");
// list.print();
// list.deleteFromEnd();
// console.log("~~~~~~~~~~~~~~~");
// list.print();
list.insertAtindex(500,5);
console.log("~~~~~~~~~~~~~~~");
list.print();




