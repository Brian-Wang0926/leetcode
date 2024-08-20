/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false

*/

// 解法 1:
function isHappy(n: number): boolean {
  // 使用 Set 來記錄出現過的數字，防止無限循環
  const seenNumbers: Set<number> = new Set<number>();
  let sum: number;

  // 當 n 不在 numSet 中且 n 不等於 1 時，持續進行計算
  while (!seenNumbers.has(n) && n !== 1) {
    seenNumbers.add(n);
    sum = 0;

    // 將數字轉換為字串並拆分成數字陣列
    const numbers: any[] = n.toString().split("");

    // 計算每個數字的平方和
    for (let i = 0; i < numbers.length; i++) {
      sum += Math.pow(parseInt(numbers[i]), 2);
    }

    // 將計算出的平方和賦值給 n
    n = sum;
  }

  // 最終判斷數字是否為 1，如果是 1 則為快樂數，否則不是
  return n === 1;
}

// 解法 2: （複雜度較佳）
// function isHappy(n: number): boolean {
//   // 用於記錄出現過的數字，防止無限循環
//   const seenNumbers = new Set<number>();

//   // 定義一個幫助函數來計算數字各位數字平方和
//   const getNextNumber = (num: number): number => {
//     let totalSum = 0;
//     while (num > 0) {
//       const digit = num % 10; // 取出最右邊的一位數字（取餘數）
//       num = Math.floor(num / 10); // 去掉最右邊的一位數字
//       totalSum += digit * digit; // 計算平方和
//     }
//     return totalSum;
//   };

//   // 當前數字不為1且未出現重複數字時，持續進行計算
//   while (n !== 1 && !seenNumbers.has(n)) {
//     seenNumbers.add(n); // 將當前數字加入已見過的數字集合
//     n = getNextNumber(n); // 計算下一個數字
//   }

//   // 最終判斷數字是否為1，如果是1則為快樂數，否則不是
//   return n === 1;
// }
