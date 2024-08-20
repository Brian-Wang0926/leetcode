/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // 創建一個虛擬頭節點
  const dummy = new ListNode(0);
  let current = dummy;

  // 當兩個列表都不為空時
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // 如果 list1 還有剩餘節點
  if (list1 !== null) {
    current.next = list1;
  }

  // 如果 list2 還有剩餘節點
  if (list2 !== null) {
    current.next = list2;
  }

  return dummy.next;
}

/*
當然，我很樂意為您舉例說明這個算法的工作過程。讓我們以第一個例子為基礎，詳細解釋算法的每一步。

例子：
list1 = [1,2,4]
list2 = [1,3,4]

讓我們逐步走through這個過程：

1. 初始狀態：
   dummy -> 0
   current = dummy
   list1 -> 1 -> 2 -> 4
   list2 -> 1 -> 3 -> 4

2. 第一次迭代：
   1 <= 1，所以我們選擇 list1 的第一個節點
   dummy -> 0 -> 1
   current = 1
   list1 -> 2 -> 4
   list2 -> 1 -> 3 -> 4

3. 第二次迭代：
   2 > 1，所以我們選擇 list2 的第一個節點
   dummy -> 0 -> 1 -> 1
   current = 1 (第二個1)
   list1 -> 2 -> 4
   list2 -> 3 -> 4

4. 第三次迭代：
   2 <= 3，所以我們選擇 list1 的節點
   dummy -> 0 -> 1 -> 1 -> 2
   current = 2
   list1 -> 4
   list2 -> 3 -> 4

5. 第四次迭代：
   4 > 3，所以我們選擇 list2 的節點
   dummy -> 0 -> 1 -> 1 -> 2 -> 3
   current = 3
   list1 -> 4
   list2 -> 4

6. 第五次迭代：
   4 <= 4，所以我們選擇 list1 的節點
   dummy -> 0 -> 1 -> 1 -> 2 -> 3 -> 4
   current = 4
   list1 = null
   list2 -> 4

7. while 循環結束，因為 list1 現在是 null

8. list2 還有一個節點，所以我們將它直接接到合併列表的末尾
   dummy -> 0 -> 1 -> 1 -> 2 -> 3 -> 4 -> 4

9. 返回 dummy.next，也就是第一個實際的節點

最終結果：[1,1,2,3,4,4]

這個例子展示了算法如何處理兩個非空的輸入列表。對於其他情況：

- 如果 list1 為空，list2 非空，算法會直接返回 list2。
- 如果 list2 為空，list1 非空，算法會直接返回 list1。
- 如果兩個列表都為空，算法會返回 null。

這個算法的優點是它不需要額外的空間來創建新的節點，而是通過重新連接現有節點來實現合併，因此空間複雜度為 O(1)。同時，它只需要遍歷每個列表一次，所以時間複雜度為 O(n+m)，其中 n 和 m 分別是兩個輸入列表的長度。*/
