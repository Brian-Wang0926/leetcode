/* Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

Example 1:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22

Example 2:

Input: root = [1,2,3], targetSum = 5
Output: []

Example 3:

Input: root = [1,2], targetSum = 0
Output: [] */

//   Definition for a binary tree node.
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];

  function dfs(
    node: TreeNode | null,
    currentPath: number[],
    currentSum: number
  ) {
    if (!node) return;

    currentPath.push(node.val);
    currentSum += node.val;

    // 如果是葉節點，且當前和等於目標和，則將路徑加入結果
    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...currentPath]);
    }

    // 繼續遍歷左子樹和右子樹
    dfs(node.left, currentPath, currentSum);
    dfs(node.right, currentPath, currentSum);

    // 回溯：移除當前節點
    currentPath.pop();
  }

  dfs(root, [], 0);
  return result;
}

/* 
讓我們考慮以下的二叉樹,目標和為 22:

```
       5
      / \
     4   8
    /   / \
   11  13  4
  /  \    / \
 7    2  5   1
```

我們將逐步追蹤 `pathSum` 函數的執行過程:

1. 初始調用: `pathSum(root, 22)`
   - 創建空的 `result` 數組
   - 調用 `dfs(root, [], 0)`

2. 開始 DFS:

   a. 節點 5 (根節點)
      - `currentPath = [5]`, `currentSum = 5`
      - 不是葉節點,繼續遍歷

   b. 節點 4 (5 的左子節點)
      - `currentPath = [5, 4]`, `currentSum = 9`
      - 不是葉節點,繼續遍歷

   c. 節點 11 (4 的左子節點)
      - `currentPath = [5, 4, 11]`, `currentSum = 20`
      - 不是葉節點,繼續遍歷

   d. 節點 7 (11 的左子節點)
      - `currentPath = [5, 4, 11, 7]`, `currentSum = 27`
      - 是葉節點,但 `currentSum != targetSum`,不添加到結果
      - 回溯,`currentPath = [5, 4, 11]`

   e. 節點 2 (11 的右子節點)
      - `currentPath = [5, 4, 11, 2]`, `currentSum = 22`
      - 是葉節點,且 `currentSum == targetSum`
      - 將 `[5, 4, 11, 2]` 添加到 `result`
      - 回溯,`currentPath = [5, 4, 11]` -> `[5, 4]` -> `[5]`

   f. 節點 8 (5 的右子節點)
      - `currentPath = [5, 8]`, `currentSum = 13`
      - 不是葉節點,繼續遍歷

   g. 節點 13 (8 的左子節點)
      - `currentPath = [5, 8, 13]`, `currentSum = 26`
      - 是葉節點,但 `currentSum != targetSum`,不添加到結果
      - 回溯,`currentPath = [5, 8]`

   h. 節點 4 (8 的右子節點)
      - `currentPath = [5, 8, 4]`, `currentSum = 17`
      - 不是葉節點,繼續遍歷

   i. 節點 5 (4 的左子節點)
      - `currentPath = [5, 8, 4, 5]`, `currentSum = 22`
      - 是葉節點,且 `currentSum == targetSum`
      - 將 `[5, 8, 4, 5]` 添加到 `result`
      - 回溯,`currentPath = [5, 8, 4]`

   j. 節點 1 (4 的右子節點)
      - `currentPath = [5, 8, 4, 1]`, `currentSum = 18`
      - 是葉節點,但 `currentSum != targetSum`,不添加到結果
      - 回溯,`currentPath = [5, 8, 4]` -> `[5, 8]` -> `[5]` -> `[]`

3. DFS 結束,返回 `result`

最終結果: `[[5, 4, 11, 2], [5, 8, 4, 5]]`

這個例子展示了算法如何遍歷整個樹,檢查每條從根到葉的路徑,並找出所有和為目標值的路徑。它也展示了回溯的過程,即在完成一個分支的探索後,如何返回到上一個節點繼續探索其他分支。

這種深度優先搜索的方法確保了我們能夠檢查樹中的每一條路徑,而回溯則允許我們在常數空間內維護當前路徑,使得算法能夠高效地解決問題。 */