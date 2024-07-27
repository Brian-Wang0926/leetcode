/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
*/

//   Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 解法 1:
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  return inorderTraversal(root.left)
    .concat([root.val])
    .concat(inorderTraversal(root.right));
}

/*
這段程式碼使用遞迴的方式來實現二叉樹的中序遍歷。遞迴是一種非常直觀的方法，因為它自然地反映了樹的結構。我們一步步來解釋這段程式碼的邏輯。

### 程式碼
```typescript
function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    
    return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right));
};
```

### 詳細解釋

1. **基礎情況 (Base Case)**：
    ```typescript
    if (!root) return [];
    ```
    - 如果 `root` 為 `null`，表示當前子樹是空的，直接返回空陣列。
    - 這是遞迴的基礎情況，用來終止遞迴。

2. **遞迴步驟**：
    ```typescript
    return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right));
    ```
    - 我們首先對左子樹進行中序遍歷，得到左子樹的中序遍歷結果。
    - 然後訪問根節點，將根節點的值放入一個單元素陣列 `[root.val]`。
    - 最後對右子樹進行中序遍歷，得到右子樹的中序遍歷結果。
    - 最終結果是將左子樹的中序遍歷結果、根節點的值、右子樹的中序遍歷結果串接起來。

### 合併操作
- `inorderTraversal(root.left)` 返回左子樹的中序遍歷結果。
- `[root.val]` 是當前根節點的值，作為中序遍歷的一部分。
- `inorderTraversal(root.right)` 返回右子樹的中序遍歷結果。

這三部分使用 `concat` 方法進行串接，形成完整的中序遍歷結果：
```typescript
inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right));
```

### 舉例

假設我們有以下二叉樹：

```plaintext
    1
     \
      2
     /
    3
```

這棵樹可以用以下方式表示：

```typescript
let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
```

調用 `inorderTraversal(root)` 的過程如下：

1. `inorderTraversal(root)`：
    - `root` 是 `1`，調用 `inorderTraversal(root.left)`（左子樹為 `null`），返回 `[]`。
    - 訪問根節點 `1`，形成 `[1]`。
    - 調用 `inorderTraversal(root.right)`，右子樹的根是 `2`。

2. `inorderTraversal(root.right)`（當 `root` 是 `2` 時）：
    - 調用 `inorderTraversal(root.left)`，左子樹的根是 `3`。
    - 訪問根節點 `2`，形成 `[2]`。
    - 調用 `inorderTraversal(root.right)`（右子樹為 `null`），返回 `[]`。

3. `inorderTraversal(root.left)`（當 `root` 是 `3` 時）：
    - 左子樹為 `null`，返回 `[]`。
    - 訪問根節點 `3`，形成 `[3]`。
    - 右子樹為 `null`，返回 `[]`。

合併結果：
- `inorderTraversal(root.left)` = `[]`。
- `根節點 1` = `[1]`。
- `inorderTraversal(root.right)` = `[3].concat([2]).concat([])` = `[3, 2]`。

最終合併結果：
- `inorderTraversal(root.left)` = `[]`。
- `根節點 1` = `[1]`。
- `inorderTraversal(root.right)` = `[3, 2]`。

所以，完整結果是：
```plaintext
[].concat([1]).concat([3, 2]) = [1, 3, 2]
```

這樣就完成了中序遍歷，並且解釋了程式碼的工作原理。希望這樣的解釋能幫助你理解！如果還有其他問題，請隨時告訴我。

*/

// 解法 2:
// function inorderTraversal(root: TreeNode | null): number[] {
//   const result: number[] = [];
//   inorderHelper(root, result);
//   return result;
// }

// function inorderHelper(node: TreeNode | null, result: number[]): void {
//   if (node !== null) {
//     inorderHelper(node.left, result); // 遍歷左子樹
//     result.push(node.val); // 訪問根節點
//     inorderHelper(node.right, result); // 遍歷右子樹
//   }
// }
