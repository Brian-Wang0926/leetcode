/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketPairs: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    //   如果是右括號，則判斷 stack 是否為空，或 stack 最後一個值是否等於左括號
    if (char in bracketPairs) {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== bracketPairs[char]
      ) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
