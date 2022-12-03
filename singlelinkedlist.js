class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedList{
    constructor(head = null){
        this.head = head;
        this.tail = head;

        if(this.head==null){
            this.length = 0;
        }
        else{
            this.length = 1;
        }
    }

    // insert at beginning
    insertAtBeginning(value){
        const newNode = new Node(value);

            newNode.next = this.head;
            this.head = newNode;
        this.length++;
    }

    insertAtIndex(value,index){ 
        if(this.head==null){
            this.head = new Node(value);
            return;
        }
        if(index==0){
            this.insertAtBeginning(value);
            return;
        }
        const previous = this.getAt(index-1);
        let newNode = new Node(value);
        newNode.next = previous.next;
        previous.next = newNode;
        this.length++;
    }

     // Adding item at last of the list
    append(value){
        const newNode = new Node(value);

        if(this.head==null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
        this.tail.next = newNode;
        this.tail = newNode;
        
        }
        this.length++;
    }

    deleteFromBeginning(){
        if(this.head==null){
            console.log("list is empty");
            return;
        }
        this.head = this.head.next;
        this.length--;
        return;
    }

    deleteFromIndex(index){
        if(!this.head){
            return;
        }
        if(index==0){
            this.deleteFromBeginning();
            return;
        }
        let previous = this.getAt(index - 1);
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;
        this.length--;
        return;
    }

    deleteFromEnd(){
        if(!this.head.next){
            this.head = null;
            return;
        }
        let prev = this.head;
        let current = this.head.next;
        
        while(current.next!==null){
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
    }

    print(){
        let current = this.head;
        if(current==null){
            console.log("list is empty");
            return;
        }
        while(current!=null){
            console.log(current.value);
            current = current.next;
        }

    }

    getAt(index){
        let counter = 0;
        let current = this.head;
        while(current!==null){
            if(counter===index){
                return current;
            }
            counter++;
            current = current.next;
        }
        return null;
    }
}

let node = new Node(100);
let list = new linkedList(node);
list.append(200);
list.append(300);
list.print();
console.log("~~~~~~~~~~~~~~~~~");
list.insertAtBeginning(50);
list.print();
console.log("~~~~~~~~~~~~~~~~~");
console.log(list.getAt(2));
console.log("~~~~~~~~~~~~~~~~~");
list.insertAtIndex(55,1);
list.print();
list.deleteFromBeginning();
console.log("~~~~~~~~~~~~~~~~~");
list.print();
list.deleteFromEnd();
console.log("~~~~~~~~~~~~~~~~~");
list.print();
list.deleteFromIndex(1);
console.log("~~~~~~~~~~~~~~~~~");
list.print();
