/* 
  TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
  and the empty methods below the constructor.
  Every node contains
  - data
  - next
  - prv
*/

class DLLNode {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
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
     * List will have
     * - head
     * - tail
     */
    constructor() {
        // TODO: implement the constructor.
        this.head = null
        this.tail = null
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
            this.head.prev = newNode;
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
            newNode.prev = this.tail;
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
        // when there is only 1 node, it is the middle, remove it.
        if (!this.isEmpty() && this.head === this.tail) {
            const removedData = this.head.data;
            this.head = null;
            this.tail = null;
            return removedData;
        }

        let forwardRunner = this.head;
        let backwardsRunner = this.tail;

        while (forwardRunner && backwardsRunner) {
            if (forwardRunner === backwardsRunner) {
                const midNode = forwardRunner;
                midNode.prev.next = midNode.next;
                midNode.next.prev = midNode.prev;
                return midNode.data;
            }

            // runners passed each other without stopping on the same node, even length, we can exit early
            if (forwardRunner.prev === backwardsRunner) {
                return null;
            }

            forwardRunner = forwardRunner.next;
            backwardsRunner = backwardsRunner.prev;
        }
        return null;
    }

    // ****************** FRIDAY ***********************
    /**
   * Inserts a new node with the given newVal after the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
    insertAfter(targetVal, newVal) {
        if (this.isEmpty()) return false;
        let runner = this.head;
        while (runner) {
            if (runner.data === targetVal) {
                const newNode = new DLLNode(newVal);
                newNode.prev = runner;
                newNode.next = runner.next;
                runner.next = newNode;
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        if (this.isEmpty()) return false;
        if(this.head.data == targetVal){
            this.insertAtFront(newVal);
            return true;
        }
        let runner = this.head.next;
        while (runner) {
            if (runner.data === targetVal) {
                const newNode = new DLLNode(newVal);
                newNode.prev = runner.prev;
                newNode.next = runner;
                runner.prev.next = newNode;
                runner.prev = newNode;
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // ****************** END FRIDAY *******************

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

console.log(unorderedList.toArray());
console.log(unorderedList.insertAfter(4,123));
console.log(unorderedList.toArray());
console.log(unorderedList.insertBefore(4,323));
console.log(unorderedList.toArray());