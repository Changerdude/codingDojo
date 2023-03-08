/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
      this.data = data;
      /**
       * This property is used to link this node to whichever node is next
       * in the list. By default, this new node is not linked to any other
       * nodes, so the setting / updating of this property will happen sometime
       * after this node is created.
       *
       * @type {ListNode|null}
       */
      this.next = null;
    }
  }
  
  /**
   * This class keeps track of the start (head) of the list and to store all the
   * functionality (methods) that each list should have.
   */
  class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
      /** @type {ListNode|null} */
      this.head = null;
    }
  
    // ********************* MONDAY *********************
    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null ? true : false
    }
  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
      const newNode = new ListNode(data);
      if (this.isEmpty()) {
        this.head = newNode;
      } else {
        let runner = this.head;
        while (runner.next) {
          runner = runner.next;
        }
        runner.next = newNode;
      }
      return this;
    }
    
  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackRecursive(data, runner = this.head) {}
  
    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
      for (const item of vals) {
        this.insertAtBack(item);
      }
      return this;
    }
    // ********************* END MONDAY *********************
    // ********************* TUESDAY *********************
    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {
      const newHead = new ListNode(data)
      newHead.next = this.head
      this.head = newHead
      return this
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeHead() {
      if (this.isEmpty()) return null

      const oldhead = this.head
      this.head = oldhead.next
      return oldhead.data
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
      let runner = this.head
      let sum = 0
      let count = 0

      while (runner) {
        count++
        sum += runner.data
        runner = runner.next
      }
      /**
      * Dividing by 0 will give you NaN (Not a Number), so an empty list will return NaN in this case,
      * it may make sense to allow NaN to be returned, because the average of an empty list doesn't make sense 
      * and it could be misleading to return 0 since 0 is the average of any list with a sum of 0
      * due to negatives or all zeros.
      */
      return sum / count
    }

    // ********************* END TUESDAY *********************
    // ********************* WEDNESDAY *********************
    /**
     * Removes the last node of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
    */
    removeBack() {
        if(this.isEmpty()) return null;
        let current = this.head;
        if(current.next == null){
            const data = current.data;
            this.head = null;
            return data;
        }
        while(current.next.next != null){
            current= current.next;
        }
        const data = current.next.data;
        current.next = null;
        return data;
    }
    
    /**
      * Determines whether or not the given search value exists in this list.
      * - Time: O(?).
      * - Space: O(?).
      * @param {any} val The data to search for in the nodes of this list.
      * @returns {boolean}
    */
    contains(val) {
        if(this.isEmpty()) return false;
        let current = this.head;
        while(current){
            if(current.data == val) return true;
            current= current.next;
        }
        return false;
    }
    
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
    */
    containsRecursive(val, current = this.head) {
        if(!current) return false;
        return current.data == val ? true : this.containsRecursive(val , current.next);
    }
    // EXTRA
    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {ListNode} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax(runner = this.head, maxNode = this.head) {
        if(this.isEmpty()) return null;
        if(!runner) return maxNode.data;
        if(runner.data > maxNode.data) maxNode = runner;
        return this.recursiveMax(runner.next , maxNode)
    }
 // ********************* END WEDNESDAY *********************
  
    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
      const arr = [];
      let runner = this.head;
  
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }

    // Method to print the linked list and its nodes
    printList() {
      let current = this.head;
      let list = '';
      while (current) {
        list += current.data + ' -> ';
        current = current.next;
      }
      list += 'null';
      console.log(list);
    }
}
  
  /******************************************************************* 
  Multiple test lists already constructed to test your methods on.
  Below commented code depends on insertAtBack method to be completed,
  after completing it, uncomment the code.
  */
  const emptyList = new SinglyLinkedList();
  
  const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
  const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
  // const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
  const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
  const unorderedList = new SinglyLinkedList().insertAtBackMany([
      -5, -10, 4, -3, 6, 1, -7, -2,
    ]);
emptyList.printList()
emptyList.removeBack()
emptyList.printList()
console.log(emptyList.containsRecursive(3))
singleNodeList.printList()
console.log(singleNodeList.containsRecursive(1))
singleNodeList.removeBack()
singleNodeList.printList()

    // console.log(biNodeList.printList())
    // console.log(secondThreeList.printList())
unorderedList.printList()
unorderedList.removeBack()
unorderedList.printList()
console.log(unorderedList.containsRecursive(234))
console.log(unorderedList.containsRecursive(4))
console.log(unorderedList.containsRecursive(null))
console.log(unorderedList.recursiveMax())

  
  /* node 4 connects to node 1, back to head */
  // const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // perfectLoopList.head.next.next.next = perfectLoopList.head;
  
  /* node 4 connects to node 2 */
  // const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // loopList.head.next.next.next = loopList.head.next;
  
  // const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
  //   1, 1, 1, 2, 3, 3, 4, 5, 5,
  // ]);
  
  // Print your list like so:
  // console.log(firstThreeList.toArr());