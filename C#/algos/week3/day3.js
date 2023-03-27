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
      if (this.isEmpty()) {
        return null;
    }

    // Only 1 node.
    if (this.head.next === null) {
        return this.removeHead();
    }

    // More than 1 node.
    let runner = this.head;

    while (runner.next.next) {
        runner = runner.next;
    }

    // after while loop finishes, runner is now at 2nd to last node
    const removedData = runner.next.data;
    runner.next = null; // remove it from list
    return removedData;
    }
    
    
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
    */
   contains(val) {
    let runner = this.head;

    while (runner) {
        if (runner.data === val) {
            return true;
        }
        runner = runner.next;
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
  containsRecursive(val, current = this.head) {}

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
 recursiveMax(runner = this.head, maxNode = this.head) {}
 
 // ********************* END WEDNESDAY *********************
 // ********************* THURSDAY *********************
 /**
  * Retrieves the data of the second to last node in this list.
  * - Time: O(?).
  * - Space: O(?).
  * @returns {any} The data of the second to last node or null if there is no
  *    second to last node.
 */
secondToLast() {
    if (!this.head || !this.head.next) {
      return null;
    }
    
    // There are at least 2 nodes since the above return hasn't happened.
    let runner = this.head;
    
    while (runner.next.next) {
      runner = runner.next;
    }
    return runner.data;
  }

  /**
   * Removes the node that has the matching given val as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value to compare to the node's data to find the
 *    node to be removed.
 * @returns {boolean} Indicates if a node was removed or not.
  */
 removeVal(val) {
  if(this.isEmpty()) return false;
  let runner = this.head;
  if(runner.data === val){
    this.removeHead();
    return true;
  }
  let follower = null;
  while (runner) {
    if (runner.data === val) {
      follower.next = runner.next;
      return true;
    }
    follower = runner;
    runner = runner.next;
  }
  return false;
}

// EXTRA
/**
 * Inserts a new node before a node that has the given value as its data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} newVal The value to use for the new node that is being added.
 * @param {any} targetVal The value to use to find the node that the newVal
 *    should be inserted in front of.
 * @returns {boolean} To indicate whether the node was pre-pended or not.
*/
prepend(newVal, targetVal) {
  if(this.isEmpty()) return false;
  let runner = this.head;
  if(runner.data === targetVal){
    this.insertAtFront(newVal);
    return true;
  }
  const newNode = new ListNode(newVal);
  let follower = null;
  while (runner) {
    if (runner.data === targetVal) {
      follower.next = newNode;
      newNode.next = runner;
      return true;
    }
    follower = runner;
    runner = runner.next;
  }
  return false;
}

// ********************* END THURSDAY *********************
// ********************* FRIDAY *********************
/**
 * Concatenates the nodes of a given list onto the back of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {SinglyLinkedList} addList An instance of a different list whose
 *    whose nodes will be added to the back of this list.
 * @returns {SinglyLinkedList} This list with the added nodes.
 */
concat(addList) {
    //find the end of the first list where .next ===null
  //make the head of the second list now that .next
  //edge cases: if one of the lists is empty
  if (this.isEmpty()){
    return addList 
  }
  let runner = this.head
  while (runner.next){
    runner= runner.next
  }
  runner.next = addList.head
  return this
}

/**
 * Finds the node with the smallest data and moves that node to the front of
 * this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {SinglyLinkedList} This list.
 */
moveMinToFront() {
  if(this.isEmpty()) return this;
  let runner = this.head;
  let minVal = runner.data;
  while(runner){
    if(runner.data < minVal) minVal = runner.data;
    runner = runner.next;
  }
  this.removeVal(minVal);
  this.insertAtFront(minVal);
  return this;
}
moveMinToFrontIdeas() {
  if(this.isEmpty()) return this;
  let runner = this.head;
  let minValNode = runner;
  let follower = null;
  let minValFollower = null;
  while(runner){
    if(runner.data < minValNode.data) {
      minValNode = runner;
      minValFollower = follower;
    }
    follower = runner;
    runner = runner.next;
  }
  minValFollower.next = minValNode.next;

  this.insertAtFront(minValNode.data);
  return this;
}

// EXTRA
/**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The value in the node that the list should be split on.
 * @returns {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
splitOnVal(val) {
  if(this.isEmpty()) return this;
  let runner = this.head;
  let follower = null;
  while(runner){
    if(runner.data ===val){
      follower.next = null;
      const newList = new SinglyLinkedList();
      newList.head= runner;
      return newList;
    }
    follower = runner;
    runner = runner.next;
  }
  return this;
}

// ********************* END FRIDAY *********************
// ********************* WEDNESDAY W3 *********************
/**
 * Reverses this list in-place without using any extra lists.
 * - Time: (?).
 * - Space: (?).
 * @returns {SinglyLinkedList} This list.
 */
reverse() {
    
}

/**
 * Determines whether the list has a loop in it which would result in
 * infinitely traversing unless otherwise avoided. A loop is when a node's
 * next points to a node that is behind it.
 * - Time: (?).
 * - Space: (?).
 * @returns {boolean} Whether the list has a loop or not.
 */
hasLoop() {
    if(this.isEmpty()) return false;
    let runner = this.head;
    const nodeArr = [runner];
    while(runner.next){
        if(nodeArr.contains(runner.next)) return true;
        nodeArr.push(runner.next)
        runner = runner.next;
    }
    return false
}

/**
 * Removes all the nodes that have a negative integer as their data.
 * - Time: (?).
 * - Space: (?).
 * @returns {SinglyLinkedList} This list after the negatives are removed.
 */
removeNegatives() {
    if(this.isEmpty()) return this;
    let runner = this.head;
    if(runner.data < 0){
      this.removeHead();
      return true;
    }
    let follower = null;
    while (runner) {
      if (runner.data < 0) {
        follower.next = runner.next;
        follower = runner.next;
        runner = runner.next.next;
      }else{
        follower = runner;
        runner = runner.next;
      }
      
    }
    return this;
}
// ********************* END WEDNESDAY W3 *********************

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
      return this
    }
  }
  
  /******************************************************************* 
   Multiple test lists already constructed to test your methods on.
   Below commented code depends on insertAtBack method to be completed,
   after completing it, uncomment the code.
   */
  const emptyList = new SinglyLinkedList();
  
  // const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
  // const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
  // const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
  // const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
  const unorderedList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
  ]);
  unorderedList.printList()
  
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