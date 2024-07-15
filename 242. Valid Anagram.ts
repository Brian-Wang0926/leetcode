// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// 解法 1:
function isAnagram(s: string, t: string): boolean {
    // 分解、排序、組合、比較
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// 解法 2:
// function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) return false;

//   const sArr = s.split("");
//   const tArr = t.split("");
//   const mapOfCalc = new Map();

//   //
//   for (let i = 0; i < sArr.length; i++) {
//     const sChar = sArr[i];
//     const sCharCount = (mapOfCalc.get(sChar) || 0) + 1;

//     if (sCharCount === 0) {
//       mapOfCalc.delete(sChar);
//     } else {
//       mapOfCalc.set(sChar, sCharCount);
//     }

//     const tChar = tArr[i];
//     const tCharCount = (mapOfCalc.get(tChar) || 0) - 1;

//     if (tCharCount === 0) {
//       mapOfCalc.delete(tChar);
//     } else {
//       mapOfCalc.set(tChar, tCharCount);
//     }
//   }

//   if (mapOfCalc.size !== 0) {
//     return false;
//   }

//   return true;
// }

// ### 程式碼解說

// 1. **迴圈初始化**
//     ```typescript
//     for (let i = 0; i < sArr.length; i++) {
//     ```
//     使用 `for` 迴圈遍歷字串 `sArr` 和 `tArr` 的每個字符，`i` 為索引，從 0 到 `sArr.length - 1`。

// 2. **處理 sArr 中的字符**
//     ```typescript
//     const sChar = sArr[i];
//     const sCharCount = (mapOfCalc.get(sChar) || 0) + 1;
//     ```
//     - `const sChar = sArr[i];` 取得 `sArr` 中當前索引 `i` 對應的字符。
//     - `const sCharCount = (mapOfCalc.get(sChar) || 0) + 1;` 從 `mapOfCalc` 中取得 `sChar` 的計數，如果 `sChar` 不存在，則使用 `0`。然後將計數加 1。

// 3. **更新 sChar 的計數**
//     ```typescript
//     if (sCharCount === 0) {
//       mapOfCalc.delete(sChar);
//     } else {
//       mapOfCalc.set(sChar, sCharCount);
//     }
//     ```
//     - 如果計數變為 0，則刪除 `sChar`。
//     - 否則，更新 `mapOfCalc` 中 `sChar` 的計數。

// 4. **處理 tArr 中的字符**
//     ```typescript
//     const tChar = tArr[i];
//     const tCharCount = (mapOfCalc.get(tChar) || 0) - 1;
//     ```
//     - `const tChar = tArr[i];` 取得 `tArr` 中當前索引 `i` 對應的字符。
//     - `const tCharCount = (mapOfCalc.get(tChar) || 0) - 1;` 從 `mapOfCalc` 中取得 `tChar` 的計數，如果 `tChar` 不存在，則使用 `0`。然後將計數減 1。

// 5. **更新 tChar 的計數**
//     ```typescript
//     if (tCharCount === 0) {
//       mapOfCalc.delete(tChar);
//     } else {
//       mapOfCalc.set(tChar, tCharCount);
//     }
//     ```
//     - 如果計數變為 0，則刪除 `tChar`。
//     - 否則，更新 `mapOfCalc` 中 `tChar` 的計數。

// ### 範例說明

// 假設 `s = "anagram"`，`t = "nagaram"`。

// 1. 初始狀態：
//     ```typescript
//     mapOfCalc = {}
//     ```

// 2. 第一次迴圈 (i = 0)：
//     ```typescript
//     sChar = 'a'
//     tChar = 'n'
//     sCharCount = (mapOfCalc.get('a') || 0) + 1 = 1
//     tCharCount = (mapOfCalc.get('n') || 0) - 1 = -1
    
//     mapOfCalc.set('a', 1)
//     mapOfCalc.set('n', -1)
    
//     mapOfCalc = { 'a': 1, 'n': -1 }
//     ```

// 3. 第二次迴圈 (i = 1)：
//     ```typescript
//     sChar = 'n'
//     tChar = 'a'
//     sCharCount = (mapOfCalc.get('n') || 0) + 1 = 0
//     tCharCount = (mapOfCalc.get('a') || 0) - 1 = 0
    
//     mapOfCalc.delete('n')
//     mapOfCalc.delete('a')
    
//     mapOfCalc = {}
//     ```

// 4. 第三次迴圈 (i = 2)：
//     ```typescript
//     sChar = 'a'
//     tChar = 'g'
//     sCharCount = (mapOfCalc.get('a') || 0) + 1 = 1
//     tCharCount = (mapOfCalc.get('g') || 0) - 1 = -1
    
//     mapOfCalc.set('a', 1)
//     mapOfCalc.set('g', -1)
    
//     mapOfCalc = { 'a': 1, 'g': -1 }
//     ```

// 5. 第四次迴圈 (i = 3)：
//     ```typescript
//     sChar = 'g'
//     tChar = 'a'
//     sCharCount = (mapOfCalc.get('g') || 0) + 1 = 0
//     tCharCount = (mapOfCalc.get('a') || 0) - 1 = 0
    
//     mapOfCalc.delete('g')
//     mapOfCalc.delete('a')
    
//     mapOfCalc = {}
//     ```

// 6. 第五次迴圈 (i = 4)：
//     ```typescript
//     sChar = 'r'
//     tChar = 'r'
//     sCharCount = (mapOfCalc.get('r') || 0) + 1 = 1
//     tCharCount = (mapOfCalc.get('r') || 0) - 1 = 0
    
//     mapOfCalc.delete('r')
    
//     mapOfCalc = {}
//     ```

// 7. 第六次迴圈 (i = 5)：
//     ```typescript
//     sChar = 'a'
//     tChar = 'a'
//     sCharCount = (mapOfCalc.get('a') || 0) + 1 = 1
//     tCharCount = (mapOfCalc.get('a') || 0) - 1 = 0
    
//     mapOfCalc.delete('a')
    
//     mapOfCalc = {}
//     ```

// 8. 第七次迴圈 (i = 6)：
//     ```typescript
//     sChar = 'm'
//     tChar = 'm'
//     sCharCount = (mapOfCalc.get('m') || 0) + 1 = 1
//     tCharCount = (mapOfCalc.get('m') || 0) - 1 = 0
    
//     mapOfCalc.delete('m')
    
//     mapOfCalc = {}
//     ```
