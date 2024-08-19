/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2 
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

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  // 遞迴計算左子樹的深度
  const leftDepth = maxDepth(root.left);

  // 遞迴計算右子樹的深度
  const rightDepth = maxDepth(root.right);

  // 返回左右子樹中較大的深度加上根節點（即 +1）
  return Math.max(leftDepth, rightDepth) + 1;
}

/* 優化 

function maxDepth(root: TreeNode | null): number {
  if(!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right))+1;
};

*/

/* 
這個解決方案使用遞迴方法來計算二叉樹的最大深度。讓我解釋一下這個算法的工作原理：

1. 首先，我們檢查根節點是否為空。如果是空的，我們返回 0，因為空樹的深度為 0。

2. 如果根節點不為空，我們遞迴地計算左子樹的深度 `leftDepth`。

3. 同樣，我們也遞迴地計算右子樹的深度 `rightDepth`。

4. 最後，我們返回左右子樹深度的較大值加 1。這裡加 1 是因為我們要算上當前節點的深度。

現在讓我們用題目中的例子來說明這個算法是如何工作的：

例子 1：
```
    3
   / \
  9  20
    /  \
   15   7
```

- 對於根節點 3，我們遞迴計算左子樹（9）和右子樹（20）的深度。
- 節點 9 沒有子節點，所以它的深度是 1。
- 對於節點 20，我們再次遞迴：
  - 15 的深度是 1
  - 7 的深度是 1
  - 20 的深度是 max(1, 1) + 1 = 2
- 回到根節點 3，我們有：
  - 左子樹深度 = 1
  - 右子樹深度 = 2
  - 3 的深度 = max(1, 2) + 1 = 3

因此，這棵樹的最大深度是 3。

例子 2：
```
  1
   \
    2
```

- 對於根節點 1，我們遞迴計算左子樹（null）和右子樹（2）的深度。
- 左子樹為空，深度為 0。
- 右子樹節點 2 沒有子節點，深度為 1。
- 回到根節點 1，我們有：
  - 左子樹深度 = 0
  - 右子樹深度 = 1
  - 1 的深度 = max(0, 1) + 1 = 2

因此，這棵樹的最大深度是 2。

這個遞迴解決方案的時間複雜度是 O(n)，其中 n 是樹中的節點數，因為我們需要訪問每個節點一次。空間複雜度在最壞情況下（樹完全不平衡，呈一條直線）是 O(n)，在最好情況下（完全平衡二叉樹）是 O(log n)，這是由於遞迴調用堆疊的深度。

*/
