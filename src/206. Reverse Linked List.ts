/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

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

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    let next: ListNode | null = current.next; // 暫存下一個節點
    current.next = prev; // 將當前節點的 next 指向前一個節點
    prev = current; // 將前一個節點移到當前節點
    current = next; // 移動到下一個節點
  }

  return prev; // prev 將成為新的頭節點
}

/*
初始狀態: current = 1 -> 2 -> 3 -> 4 -> 5, prev = null

步驟1: current = 2 -> 3 -> 4 -> 5, prev = 1 -> null
步驟2: current = 3 -> 4 -> 5, prev = 2 -> 1 -> null
步驟3: current = 4 -> 5, prev = 3 -> 2 -> 1 -> null
步驟4: current = 5, prev = 4 -> 3 -> 2 -> 1 -> null
步驟5: current = null, prev = 5 -> 4 -> 3 -> 2 -> 1 -> null

好的，讓我們來詳細說明這一部分的邏輯。

當我們要反轉鏈結串列時，我們需要逐一改變每個節點的 `next` 指標，使它指向前一個節點。這樣我們才能最終得到一個反轉過的鏈結串列。

### 初始狀態

假設我們有以下鏈結串列：

```plaintext
head = [1 -> 2 -> 3 -> 4 -> 5]
```

我們有兩個指標：
- `current` 初始指向 `head`，即指向節點 `1`。
- `prev` 初始為 `null`，因為反轉過程尚未開始，沒有前一個節點。

### 逐步操作

#### 步驟 1：暫存 `current.next` 到 `next`
首先，我們要暫存 `current.next`，這樣在改變 `current.next` 的指向後，我們還能知道原本鏈結串列中下一個節點是什麼。

```typescript
let next: ListNode | null = current.next;
```

在這個步驟中：
- `current` 是節點 `1`，它的 `next` 是節點 `2`。
- 因此，`next = 2 -> 3 -> 4 -> 5`。

#### 步驟 2：將 `current.next` 指向 `prev`
接下來，我們要改變 `current` 的 `next` 指向，使其指向 `prev`。這一步實際上是在進行反轉。

```typescript
current.next = prev;
```

在這個步驟中：
- `current` 是節點 `1`，它的 `next` 本來是節點 `2`。
- `prev` 是 `null`，因為在最開始我們還沒有任何已反轉的節點。

當我們執行 `current.next = prev` 時：
- `current.next` 變成了 `null`（因為 `prev` 是 `null`）。
- 因此，節點 `1` 現在指向 `null`。

這一步完成後，節點 `1` 的鏈結改變如下：
```plaintext
1 -> null
```

而 `next` 還保有剩下的鏈結串列：
```plaintext
next = 2 -> 3 -> 4 -> 5
```

#### 步驟 3：更新 `prev` 為 `current`
我們需要更新 `prev` 為當前節點 `current`，因為我們已經處理完 `current`，接下來的節點需要指向這個剛剛反轉的節點。

```typescript
prev = current;
```

在這個步驟中：
- `current` 是節點 `1`，已經被反轉並指向 `null`。
- 因此，`prev` 現在變成 `1 -> null`。

#### 步驟 4：將 `current` 移動到 `next`
最後，我們需要將 `current` 移動到下一個節點，以繼續反轉剩餘的鏈結串列。

```typescript
current = next;
```

在這個步驟中：
- `next` 是節點 `2 -> 3 -> 4 -> 5`。
- 因此，`current` 現在變成 `2 -> 3 -> 4 -> 5`。

### 圖解

綜合上述步驟，我們可以這樣視覺化：

初始狀態：
```plaintext
current: 1 -> 2 -> 3 -> 4 -> 5
prev: null
```

暫存 `current.next` 到 `next`：
```plaintext
next: 2 -> 3 -> 4 -> 5
current: 1 -> 2 -> 3 -> 4 -> 5
prev: null
```

將 `current.next` 指向 `prev`：
```plaintext
current: 1 -> null
next: 2 -> 3 -> 4 -> 5
prev: null
```

更新 `prev` 為 `current`，將 `current` 移動到 `next`：
```plaintext
prev: 1 -> null
current: 2 -> 3 -> 4 -> 5
```

這樣就完成了對 `current.next = prev` 這一步的詳細解釋。這一步的目的是將當前節點的 `next` 指向前一個節點，從而逐步反轉鏈結串列。希望這樣的解釋能幫助你理解！如果還有其他問題，請隨時告訴我。
*/