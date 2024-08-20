/* Given the head of a linked list, return the list after sorting it in ascending order.

Example 1:

Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:

Input: head = []
Output: [] 

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

function sortList(head: ListNode | null): ListNode | null {
  // 基本情況：如果鏈表為空或只有一個節點，則已經排序
  if (head === null || head.next === null) return head;

  // 使用快慢指針找到鏈表的中點
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // 將鏈表分成兩半
  const mid = slow!.next;
  slow!.next = null;

  // 遞迴地排序兩半
  const left = sortList(head);
  const right = sortList(mid);

  // 合併兩個排序好的鏈表
  return mergeLists(left, right);
}

// 合併排序過後的兩個list
function mergeLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  }

  if (l2 !== null) {
    current.next = l2;
  }

  return dummy.next;
}

// 匯出
export { ListNode, sortList, mergeLists };

/* 現在，讓我們通過一個例子來說明這個函數是如何工作的。

例子：
假設我們有兩個已排序的鏈表：
- l1: 1 -> 3 -> 5
- l2: 2 -> 4 -> 6

我們將逐步說明 `mergeLists` 函數如何合併這兩個鏈表。

步驟說明：

1. 初始化：
   - 創建一個虛擬頭節點 `dummy`，值為 0。
   - 設置 `current` 指向 `dummy`。

2. 第一次迭代：
   - 比較 1 和 2，1 < 2
   - 將 `current.next` 指向 l1 (1)
   - l1 移動到下一個節點 (3)
   - `current` 移動到 1
   結果：dummy -> 1

3. 第二次迭代：
   - 比較 3 和 2，3 > 2
   - 將 `current.next` 指向 l2 (2)
   - l2 移動到下一個節點 (4)
   - `current` 移動到 2
   結果：dummy -> 1 -> 2

4. 第三次迭代：
   - 比較 3 和 4，3 < 4
   - 將 `current.next` 指向 l1 (3)
   - l1 移動到下一個節點 (5)
   - `current` 移動到 3
   結果：dummy -> 1 -> 2 -> 3

5. 第四次迭代：
   - 比較 5 和 4，5 > 4
   - 將 `current.next` 指向 l2 (4)
   - l2 移動到下一個節點 (6)
   - `current` 移動到 4
   結果：dummy -> 1 -> 2 -> 3 -> 4

6. 第五次迭代：
   - 比較 5 和 6，5 < 6
   - 將 `current.next` 指向 l1 (5)
   - l1 移動到下一個節點 (null)
   - `current` 移動到 5
   結果：dummy -> 1 -> 2 -> 3 -> 4 -> 5

7. 循環結束，處理剩餘節點：
   - l1 為 null，l2 還有一個節點 (6)
   - 將 `current.next` 指向 l2
   最終結果：dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

8. 返回 `dummy.next`，即排序後的鏈表的頭節點 (1)

最終合併後的鏈表：1 -> 2 -> 3 -> 4 -> 5 -> 6

這個過程展示了 `mergeLists` 函數如何有效地合併兩個已排序的鏈表。它通過比較兩個鏈表的當前節點，每次選擇較小的節點添加到結果鏈表中，從而保證最終合併後的鏈表也是有序的。使用虛擬頭節點（dummy）簡化了操作，避免了處理頭節點的特殊情況。

這個方法的時間複雜度是 O(n)，其中 n 是兩個鏈表的總長度，因為我們只需要遍歷每個節點一次。空間複雜度是 O(1)，因為我們只使用了固定的額外空間來存儲幾個指針。 */
