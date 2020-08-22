// test
// Given a linkedlist, reverse the nodes of a linked list k at a time and return its modified list

// linkedList = {
//   head: {
//     val: A,
//     next: {
//       val: B,
//       next: {
//         val: C,
//         next: null
//       }
//     }
//   }
// }

// k = 3
// linkedlist: [1,2,3,4,5,6,7,8,9,0] // length = 3
// 321 // 654 // 987 /0

// input: a linked list with size of k
// output: reversed form of a linkedList

// see if length of linkedlist is devidable by k
// yes => what's remainding none dividable nodes;

// loops, size of linkedlist with dividable nodes only (9 out of 10);
// backwardloop 3, 2, 1
// pushes the nodes into a new linkedlist;


{
  data: 1,
    next: {
    data: 2,
      next: {
      data: 3,
        next: {
        data: 4,
          next: {
          data: 5,
            next: {
            data: 5,
              next: {
              data: 6
            }
          }
        }
      }
    }
  }
}

{
  data: 1,
    next: {
    data: 2,
      next: {
      data: 3,
        next: {
        data: 4,
          next: {
          data: 5,
            next: {
            data: 5,
              next: {
              data: 6
            }
          }
        }
      }
    }
  }
}
function reverseKGroupsOfLinkedList(head, k) {
  // edge cases:
  // no head.next, k === 1;
  if (k === 1 || head.next === null || !head.val || head.length - k < 0) {
    return head;
  }

  // iterate through the nodes in head, group k at a time;
  for (var i = 0; i < head.length; i = i + k) {
    // iterate through the nodes in group, in reverse fashion;
    for (var j)
    // replace the nodes at the back with the ones at the front;
    // return modified linkedlist;
  }
}
