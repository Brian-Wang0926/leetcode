/*
返回 x 的平方根，向下取整到最接近的整數。 二分搜索算法

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;

  let left = 1;
  let right = Math.floor(x / 2) + 1; //因為對於 x > 1，其平方根一定小於或等於 x/2

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

/*
mySqrt(8)
初始狀態：left = 1, right = 5

第一次迭代：
mid = (1 + 5) / 2 = 3
3 * 3 = 9 > 8
right = 3 - 1 = 2

第二次迭代：
mid = (1 + 2) / 2 = 1
1 * 1 = 1 < 8
left = 1 + 1 = 2

第三次迭代：
mid = (2 + 2) / 2 = 2
2 * 2 = 4 < 8
left = 2 + 1 = 3

循環結束，因為 left > right
返回 right，即 2
*/