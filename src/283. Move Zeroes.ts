/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let writePointer = 0;

  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    const val = nums[readPointer];
    nums[readPointer] = 0;

    if (val !== 0) {
      nums[writePointer] = val;
      writePointer++;
    }
  }
}

/*
這段程式碼同樣使用了雙指針技術來將陣列中的所有 `0` 移動到末尾，同時保持非零元素的相對順序。

### 程式碼說明

1. **初始化指針**：
   - `writePointer` 用於記錄非零元素應該放置的位置，初始為 `0`。
   - `readPointer` 用於遍歷整個陣列。

2. **遍歷陣列**：
   - 使用 `readPointer` 遍歷整個陣列。
   - 每次迭代時，都將當前元素設置為 `0`。
   - 如果當前元素不為 `0`，則將其放置在 `writePointer` 位置，並將 `writePointer` 向後移動一位。

### 具體步驟

1. 初始化 `writePointer` 為 `0`。
2. 遍歷 `nums` 陣列：
   - 將當前元素設置為 `0`。
   - 如果當前元素不為 `0`，則將其放置在 `writePointer` 位置，並將 `writePointer` 向後移動一位。

### 例子

假設我們有以下輸入：
```plaintext
nums = [0, 1, 0, 3, 12]
```

讓我們一步步來看這段程式碼如何工作：

#### 初始化
```plaintext
writePointer = 0
```

#### 遍歷陣列

1. 當 `readPointer = 0` 時：
   - `val = nums[0] = 0`
   - 將 `nums[0]` 設為 `0`（無變化）
   - `val` 為 `0`，所以不更新 `writePointer`
   - 狀態：`nums = [0, 1, 0, 3, 12]`，`writePointer = 0`

2. 當 `readPointer = 1` 時：
   - `val = nums[1] = 1`
   - 將 `nums[1]` 設為 `0`
   - `val` 不為 `0`，將 `nums[0]` 設為 `1`
   - `writePointer` 向後移動一位
   - 狀態：`nums = [1, 0, 0, 3, 12]`，`writePointer = 1`

3. 當 `readPointer = 2` 時：
   - `val = nums[2] = 0`
   - 將 `nums[2]` 設為 `0`（無變化）
   - `val` 為 `0`，所以不更新 `writePointer`
   - 狀態：`nums = [1, 0, 0, 3, 12]`，`writePointer = 1`

4. 當 `readPointer = 3` 時：
   - `val = nums[3] = 3`
   - 將 `nums[3]` 設為 `0`
   - `val` 不為 `0`，將 `nums[1]` 設為 `3`
   - `writePointer` 向後移動一位
   - 狀態：`nums = [1, 3, 0, 0, 12]`，`writePointer = 2`

5. 當 `readPointer = 4` 時：
   - `val = nums[4] = 12`
   - 將 `nums[4]` 設為 `0`
   - `val` 不為 `0`，將 `nums[2]` 設為 `12`
   - `writePointer` 向後移動一位
   - 狀態：`nums = [1, 3, 12, 0, 0]`，`writePointer = 3`

### 結果

遍歷結束後，陣列變為：
```plaintext
nums = [1, 3, 12, 0, 0]
```

這樣所有的 `0` 被移動到了末尾，並且非零元素的相對順序得到了保持。

### 完整程式碼

```typescript
function moveZeroes(nums: number[]): void {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    const val = nums[readPointer];
    nums[readPointer] = 0;
    if (val !== 0) {
      nums[writePointer] = val;
      writePointer++;
    }
  }
}
```

這樣就完成了這段程式碼的詳細解釋及其運行過程的說明。如果還有其他問題，請隨時告訴我！
*/