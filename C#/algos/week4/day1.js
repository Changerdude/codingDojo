/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        this.items.push(item);
        return this.items.length;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() { 
        return this.items.pop();
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        this.items[this.items.length-1]
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return this.items[0] == undefined;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        return this.items.length;
    }
}

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }
    push(item) {
        const newNode = new StackNode(item);
        if(this.isEmpty()){
            this.head = newNode
        } else {
            let runner = this.head;
            while(runner.next){
                runner = runner.next
            }
            runner.next = newNode;
        }
        return this;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() { 
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.head.next === null) {
            const removedData = this.head.data;
            this.head = null;
            return removedData;
        }
        let runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        const removedData = runner.next.data;
        runner.next = null;
        return removedData;
        
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        if(this.isEmpty()) return undefined;
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        return runner.data;
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return this.head == null;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        if(this.isEmpty()) return 0;
        let count = 1;
        let runner = this.head;
        while(runner){
            count++;
            runner = runner.next;
        }
        return count;
    }
}
class DLStackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DLinkedListStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    push(item) {
        const newNode = new DLStackNode(item);
        if(this.isEmpty()){
            this.head = newNode
            this.prev = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        return this;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() { 
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.head.next === null) {
            const removedData = this.head.data;
            this.head = null;
            this.tail = null;
            return removedData;
        }
        const removedData = this.tail.data;
        this.tail = this.tail.prev;
        this.tail.next = null;
        return removedData;
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        if(this.isEmpty()) return undefined;
        return this.tail.data;
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return this.head == null;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        if(this.isEmpty()) return 0;
        let count = 1;
        let runner = this.head;
        while(runner.next){
            count++;
            runner = runner.next;
        }
        return count;
    }
}


const stack = new Stack();
console.log(stack.isEmpty());
stack.push(3);
stack.push(5);
stack.push(1);
stack.push(66);
stack.push(7);
stack.push(2);
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());

const stackList = new LinkedListStack();
console.log(stackList.size());
stackList
.push(Math.floor(Math.random()*20))
.push(Math.floor(Math.random()*20))
.push(Math.floor(Math.random()*20))
.push(Math.floor(Math.random()*20))
.push(Math.floor(Math.random()*20))
.push(Math.floor(Math.random()*20))
.push(Math.floor(Math.random()*20))
.push(Math.floor(Math.random()*20))

console.log(stackList.size());
console.log(stackList.pop());
console.log(stackList.size());
console.log(stackList.peek());
