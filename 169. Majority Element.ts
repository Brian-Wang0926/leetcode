/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

function majorityElement(nums: number[]): number {
  let candidate = 0;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

/*

Boyer-Moore 多數投票算法
這個算法的基本思想是使用一個計數器來追踪目前候選的主要元素。當我們遍歷數組時，如果計數器為零，我們將當前元素設為候選主要元素，並將計數器設為1。否則，如果當前元素與候選元素相同，計數器加一，否則計數器減一。最終，候選元素就是主要元素。

輸入：nums = [2, 2, 1, 1, 1, 2, 2]
過程：
初始化：candidate = 0, count = 0
第一個元素 2：count = 0，更新 candidate = 2, count = 1
第二個元素 2：count != 0，candidate = 2，count++，count = 2
第三個元素 1：count != 0，candidate != 1，count--，count = 1
第四個元素 1：count != 0，candidate != 1，count--，count = 0
第五個元素 1：count = 0，更新 candidate = 1, count = 1
第六個元素 2：count != 0，candidate != 2，count--，count = 0
第七個元素 2：count = 0，更新 candidate = 2, count = 1
輸出：2
*/
