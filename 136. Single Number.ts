/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

*/

// 方法1

function singleNumber(nums: number[]): number {
  const numSet = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      numSet.delete(nums[i]);
    } else {
      numSet.add(nums[i]);
    }
  }

  const values = numSet.values();
  return values.next().value;
}

// 方法2
/*
function singleNumber(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}
*/
/*當然，我很樂意更詳細地解釋異或運算（XOR）和 ^= 運算符。

異或（XOR）運算：

1. 基本定義：
   - 異或是一種位運算，對應的符號是 ^。
   - 當兩個比較的位不同時，結果為1；當兩個比較的位相同時，結果為0。

2. 真值表：
   A | B | A ^ B
   0 | 0 |   0
   0 | 1 |   1
   1 | 0 |   1
   1 | 1 |   0

3. 特性：
   - 交換律：a ^ b = b ^ a
   - 結合律：(a ^ b) ^ c = a ^ (b ^ c)
   - 自反性：a ^ a = 0
   - 與0異或：a ^ 0 = a

4. 二進制例子：
   5 ^ 3 = 101 ^ 011 = 110 (6)

^= 運算符：

1. 定義：
   - ^= 是複合賦值運算符，結合了異或操作和賦值操作。
   - a ^= b 等同於 a = a ^ b。

2. 使用例子：
```typescript
let a = 5;  // 101 in binary
a ^= 3;     // 等同於 a = a ^ 3
// 此時 a = 6 (110 in binary)
```

在我們的 singleNumber 函數中：

```typescript
function singleNumber(nums: number[]): number {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
}
```

每次迭代時，`result ^= num` 都在執行以下操作：
1. 將 `result` 的當前值與 `num` 進行異或運算。
2. 將運算結果賦值回 `result`。

這個操作的效果是：
- 對於出現兩次的數字，它們最終會互相抵消（因為 a ^ a = 0）。
- 只出現一次的數字會保留下來（因為 0 ^ a = a）。

例如，對於輸入 [4,1,2,1,2]：
1. 0 ^ 4 = 4
2. 4 ^ 1 = 5
3. 5 ^ 2 = 7
4. 7 ^ 1 = 6 （1再次出現，抵消了之前的1）
5. 6 ^ 2 = 4 （2再次出現，抵消了之前的2）

最終結果是4，這正是數組中唯一出現一次的數字。

這種方法巧妙地利用了異或運算的特性，使得我們可以在不使用額外空間的情況下找出唯一出現一次的數字。*/
