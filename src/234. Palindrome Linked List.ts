// https://leetcode.com/problems/palindrome-linked-list/description/

// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 解法 1:
// 空間複雜度 O(n)
function isPalindrome(head: ListNode | null): boolean {
    // Store all values from the linked list in an array
    let valuesFound: number[] = [];
    while (head !== null) {
        valuesFound.push(head.val);
        head = head.next;
    }

    // Check if the list of values are a palindrome
    let left = 0;
    let right = valuesFound.length - 1;
    while (left <= right) {
        if (valuesFound[left] !== valuesFound[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// 解法 2:
// 空間複雜度 O(1)

// function isPalindrome(head: ListNode | null): boolean {
//   // 如果鏈表為空或只有一個節點，直接返回 true，因為空鏈表或單個節點本身就是回文。
//   if (head === null || head.next === null) return true;

//   //找到鏈表的中點，當 fast 到達鏈表末尾時，slow 剛好位於中點。
//   let slow: ListNode | null = head;
//   let fast: ListNode | null = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next!; // ! 代表非空斷言運算符，告訴 TypeScript 這裡 slow.next 一定不會是 null
//     fast = fast.next.next;
//   }

//   // 將後半部分反轉
//   let prev: ListNode | null = null;
//   let curr: ListNode | null = slow;

//   while (curr !== null) {
//     let nextTemp: ListNode | null = curr.next; // 暫存當前節點的下一個節點
//     curr.next = prev; // 將當前節點的 next 指向前一個節點
//     prev = curr; // 更新前一個節點為當前節點
//     curr = nextTemp; // 移動到下一個節點

//   // 比較前半部分與反轉後的後半部分
//   let firstHalf: ListNode | null = head;
//   let secondHalf: ListNode | null = prev;

//   while (secondHalf !== null) {
//     if (firstHalf!.val !== secondHalf.val) return false;
//     firstHalf = firstHalf!.next;
//     secondHalf = secondHalf.next;
//   }

//   return true;
// }
