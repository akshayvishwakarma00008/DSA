// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
//  }
let removeNthNodeFromEnd = function(head,n){
    let node = new ListNode(0);
    node.next = head;
    
    let len = 0;
    let tempnode = head;

    while(tempnode != null){
        len++;
        tempnode = tempnode.next;
    }

    let target = len - n;
    let currentNode = node;
    
    for(let i=0;i<target ; i++){
        currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;

    return node.next;
}