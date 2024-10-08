/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left: number = 0;
  let right: number = s.length - 1;

  while (left < right) {
    // 交換 s[left] 和 s[right]
    [s[left], s[right]] = [s[right], s[left]];
    
    // 移動指針
    left++;
    right--;
  }
}

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);