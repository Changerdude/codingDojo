/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // TODO: implement the constructor.
        this.head = null;
        this.tail = null;
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        const newNode = new DLLNode(data);
        if (this.isEmpty()){
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        return this
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        const newNode = new DLLNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this
    }
    

    /**
    * Adds all the given items to the back of this list.
    * @param {Array<any>} items Items to be added to the back of this list.
    * @returns {DoublyLinkedList} This list.
    */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        //List is empty
        if (this.isEmpty()) return null
        //List has one value
        if (this.head == this.tail){
            const data = this.head;
            this.head = null;
            this.tail = null;
            return data;
        }
        let frontRunner = this.head
        let backRunner = this.tail
        while (frontRunner.next != backRunner.previous) {
            if (frontRunner.next == backRunner) return null;
            frontRunner = frontRunner.next;
            backRunner = backRunner.previous;
        }
        const data = frontRunner.next.data;
        frontRunner.next = backRunner;
        backRunner.previous = frontRunner;
        return data;
    }
    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
    -5,
    -10,
    4,
    -3,
    6,
    1,
    -7,
    -2,
]);

console.log(singleNodeList.toArray());
console.log(unorderedList.toArray());
console.log(unorderedList.removeMiddleNode());
console.log(unorderedList.toArray());
