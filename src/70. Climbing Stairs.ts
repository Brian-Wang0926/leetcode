/*
斐波那契數列

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/

function climbStairs(n: number): number {
  if (n <= 1) return 1;

  let prev = 1; // 代表爬到第 0 階的方法數
  let curr = 1; // 代表爬到第 1 階的方法數

  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}

/*
當然，我會用一個具體的例子來說明這個函數是如何工作的。讓我們以 n = 5 為例，即計算爬 5 階樓梯的不同方法數。

我們將逐步執行 `climbStairs(5)` 函數：

1. 初始化：
   ```
   n = 5
   prev = 1 (代表爬到第 0 階的方法數)
   curr = 1 (代表爬到第 1 階的方法數)
   ```

2. 開始循環，i 從 2 到 5：

   當 i = 2:
   ```
   temp = curr = 1
   curr = prev + curr = 1 + 1 = 2
   prev = temp = 1
   ```
   (爬到第 2 階的方法數是 2)

   當 i = 3:
   ```
   temp = curr = 2
   curr = prev + curr = 1 + 2 = 3
   prev = temp = 2
   ```
   (爬到第 3 階的方法數是 3)

   當 i = 4:
   ```
   temp = curr = 3
   curr = prev + curr = 2 + 3 = 5
   prev = temp = 3
   ```
   (爬到第 4 階的方法數是 5)

   當 i = 5:
   ```
   temp = curr = 5
   curr = prev + curr = 3 + 5 = 8
   prev = temp = 5
   ```
   (爬到第 5 階的方法數是 8)

3. 循環結束，返回 curr，也就是 8。

所以，爬 5 階樓梯有 8 種不同的方法。我們可以列舉這 8 種方法：

1. 1 + 1 + 1 + 1 + 1
2. 1 + 1 + 1 + 2
3. 1 + 1 + 2 + 1
4. 1 + 2 + 1 + 1
5. 2 + 1 + 1 + 1
6. 1 + 2 + 2
7. 2 + 1 + 2
8. 2 + 2 + 1

這個例子展示了函數如何通過迭代計算每一階的方法數，最終得到第 5 階的方法數。每一步都利用了前兩步的結果，體現了動態規劃的思想。

這種方法的優點是它只需要常數額外空間，並且時間複雜度與樓梯階數 n 成正比，是一個非常高效的解決方案。
*/