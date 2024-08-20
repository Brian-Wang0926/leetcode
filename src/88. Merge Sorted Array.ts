/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, 
but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
  */

/**
 Do not return anything, modify nums1 in-place instead.
 */
//方法 1:
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m, j = 0; j < n; i++, j++) {
      nums1[i] = nums2[j];
  }
  nums1.sort((a,b) => a - b);
};

//方法 2:
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   let p1 = m - 1; // nums1 的指針
//   let p2 = n - 1; // nums2 的指針
//   let p = m + n - 1; // 合併後數組的指針

//   while (p2 >= 0) {
//     if (p1 >= 0 && nums1[p1] > nums2[p2]) {
//       nums1[p] = nums1[p1];
//       p1--;
//     } else {
//       nums1[p] = nums2[p2];
//       p2--;
//     }
//     p--;
//   }
// }

/* 當然,我很樂意為您詳細解釋並舉例說明這個合併排序的過程。

讓我們以題目中的第一個例子來逐步說明:

輸入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

步驟說明:

1. 初始化指針:
   p1 = 2 (nums1 最後一個有效元素的索引)
   p2 = 2 (nums2 最後一個元素的索引)
   p = 5 (合併後數組的最後一個位置)

2. 開始比較和合併:

   比較 nums1[2] 和 nums2[2]: 3 < 6
   nums1[5] = 6
   p2 降為 1, p 降為 4
   [1,2,3,0,0,6]

   比較 nums1[2] 和 nums2[1]: 3 < 5
   nums1[4] = 5
   p2 降為 0, p 降為 3
   [1,2,3,0,5,6]

   比較 nums1[2] 和 nums2[0]: 3 > 2
   nums1[3] = 3
   p1 降為 1, p 降為 2
   [1,2,3,3,5,6]

   比較 nums1[1] 和 nums2[0]: 2 = 2
   nums1[2] = 2
   p2 降為 -1, p 降為 1
   [1,2,2,3,5,6]

3. 循環結束,因為 p2 < 0

最終結果: [1,2,2,3,5,6]

讓我們再看一個不同的例子來加深理解:

輸入:
nums1 = [4,5,6,0,0,0], m = 3
nums2 = [1,2,3], n = 3

步驟說明:

1. 初始化指針: p1 = 2, p2 = 2, p = 5

2. 開始比較和合併:

   比較 nums1[2] 和 nums2[2]: 6 > 3
   nums1[5] = 6
   p1 降為 1, p 降為 4
   [4,5,6,0,0,6]

   比較 nums1[1] 和 nums2[2]: 5 > 3
   nums1[4] = 5
   p1 降為 0, p 降為 3
   [4,5,6,0,5,6]

   比較 nums1[0] 和 nums2[2]: 4 > 3
   nums1[3] = 4
   p1 降為 -1, p 降為 2
   [4,5,6,4,5,6]

   p1 < 0,所以接下來只從 nums2 取元素

   nums1[2] = 3
   p2 降為 1, p 降為 1
   [4,5,3,4,5,6]

   nums1[1] = 2
   p2 降為 0, p 降為 0
   [4,2,3,4,5,6]

   nums1[0] = 1
   p2 降為 -1, p 降為 -1
   [1,2,3,4,5,6]

3. 循環結束,因為 p2 < 0

最終結果: [1,2,3,4,5,6]

這個算法的關鍵在於從後往前填充 nums1,這樣可以避免覆蓋 nums1 中尚未處理的元素。通過比較兩個數組的末尾元素,我們可以確保最大的元素總是被正確地放置在合併後數組的末尾。

這種方法的時間複雜度是 O(m+n),因為我們最多遍歷 m+n 個元素。空間複雜度是 O(1),因為我們只使用了幾個額外的指針變量,沒有使用額外的數組空間。

*/