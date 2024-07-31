/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

*/

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

/*
解釋：

我們定義兩個指針 left 和 right，初始分別指向數組的開始和結束。
使用 while 循環，當 left <= right 時繼續搜索。
在每次循環中：

計算中間索引 mid。
如果 nums[mid] 等於目標值，我們找到了目標，直接返回 mid。
如果 nums[mid] 小於目標值，說明目標在右半部分，我們將 left 移到 mid + 1。
如果 nums[mid] 大於目標值，說明目標在左半部分，我們將 right 移到 mid - 1。


如果循環結束還沒找到目標，left 的位置就是目標值應該插入的位置。

這個算法的時間複雜度是 O(log n)，因為每次迭代我們都將搜索範圍減半。
讓我們用給出的例子來驗證：
例子 1: nums = [1,3,5,6], target = 5

初始：left = 0, right = 3
第一次迭代：mid = 1, nums[1] = 3 < 5, left = 2
第二次迭代：mid = 2, nums[2] = 5 = 5, 返回 2

例子 2: nums = [1,3,5,6], target = 2

初始：left = 0, right = 3
第一次迭代：mid = 1, nums[1] = 3 > 2, right = 0
循環結束，返回 left = 1

例子 3: nums = [1,3,5,6], target = 7

初始：left = 0, right = 3
第一次迭代：mid = 1, nums[1] = 3 < 7, left = 2
第二次迭代：mid = 2, nums[2] = 5 < 7, left = 3
第三次迭代：mid = 3, nums[3] = 6 < 7, left = 4
循環結束，返回 left = 4

 */