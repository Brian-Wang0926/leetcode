/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701

*/

function titleToNumber(columnTitle: string): number {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + (columnTitle.charCodeAt(i) - 64);
  }
  return result;
}

/*
這個解決方案的工作原理如下:

1. 我們從左到右遍歷字符串中的每個字符。
2. 對於每個字符，我們先將結果乘以 26（因為是 26 進制），然後加上當前字符對應的數值。
3. 字符對應的數值通過 charCodeAt() 方法獲得 ASCII 碼，再減去 64（因為 'A' 的 ASCII 碼是 65）。

例如，對於 "AB":

首先處理 'A'：result = 0 * 26 + (65 - 64) = 1
然後處理 'B'：result = 1 * 26 + (66 - 64) = 26 + 2 = 28

對於 columnTitle = "ZY"，我們的函數會這樣運行：

首先處理 'Z'：

result = 0 * 26 + (90 - 64) = 26
（'Z' 的 ASCII 碼是 90）


然後處理 'Y'：

result = 26 * 26 + (89 - 64) = 676 + 25 = 701
（'Y' 的 ASCII 碼是 89）



所以最終結果是 701。

*/