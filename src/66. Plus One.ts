/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

*/

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1); // 若為 [9,9,9] => [1,0,0,0]
  return digits;
}

/*
對於 [4,3,2,2]:

讓我們逐步執行函數：
a) 從最後一位開始，i = 3，digits[3] = 2
2 < 9，所以我們將其加1
digits[3] 變成 3
數組變為 [4,3,2,3]
因為我們找到了一個小於9的數字並加1，所以我們立即返回結果
所以對於輸入 [4,3,2,2]，輸出是 [4,3,2,3]。

對於 [4,3,9,9]:

讓我們逐步執行函數：
a) 從最後一位開始，i = 3，digits[3] = 9
9 不小於 9，所以我們將其設為 0
數組變為 [4,3,9,0]
b) 繼續下一位，i = 2，digits[2] = 9
9 不小於 9，所以我們將其設為 0
數組變為 [4,3,0,0]
c) 繼續下一位，i = 1，digits[1] = 3
3 < 9，所以我們將其加1
digits[1] 變成 4
數組變為 [4,4,0,0]
因為我們找到了一個小於9的數字並加1，所以我們立即返回結果
所以對於輸入 [4,3,9,9]，輸出是 [4,4,0,0]。
*/