/*
Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 

Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
*/

function reverseBits(n: number): number {
    let result = 0; // 初始化反轉結果
    for (let i = 0; i < 32; i++) { // 迴圈執行32次，處理32位元
        const bit = n & 1; // 取出 n 的最後一位
        result = (result << 1) | bit; // 將這一位加到結果的最右邊
        n >>= 1; // 將 n 右移一位，準備處理下一位
    }
    return result >>> 0; // 確保結果為無符號32位整數
}

// 測試用例
const input1 = 0b00000010100101000001111010011100; // 二進位數字
const input2 = 0b11111111111111111111111111111101; // 二進位數字

console.log(reverseBits(input1)); // 輸出 964176192
console.log(reverseBits(input2)); // 輸出 3221225471

/*
位元運算符（bitwise operators）是一組直接操作位元的運算符。這些運算符可以對整數的二進位表示進行操作。位元運算通常比其他類型的運算快，因為它們直接在位元層面上操作。以下是一些常見的位元運算符及其用途：

### 1. 按位與（&）
`&` 運算符將兩個數字的對應位進行按位與操作，只有當兩個位都是 `1` 時，結果才是 `1`，否則結果是 `0`。

範例：
```typescript
5 & 3
// 5: 0101
// 3: 0011
// 結果: 0001 (1)
```

### 2. 按位或（|）
`|` 運算符將兩個數字的對應位進行按位或操作，只要其中一個位是 `1`，結果就是 `1`。

範例：
```typescript
5 | 3
// 5: 0101
// 3: 0011
// 結果: 0111 (7)
```

### 3. 按位異或（^）
`^` 運算符將兩個數字的對應位進行按位異或操作，當兩個位不同時，結果是 `1`，相同時結果是 `0`。

範例：
```typescript
5 ^ 3
// 5: 0101
// 3: 0011
// 結果: 0110 (6)
```

### 4. 按位非（~）
`~` 運算符將數字的每個位元進行取反操作，即 `0` 變 `1`，`1` 變 `0`。

範例：
```typescript
~5
// 5:  0101
// 結果: 1010 (-6) (在 32 位元整數中表示為 4294967290)
```
在二補數表示法中，`~x` 等同於 `-x-1`。

### 5. 左移（<<）
`<<` 運算符將數字的位元向左移動指定的位數，右側用 `0` 補充。左移 n 位等同於乘以 2 的 n 次方。

範例：
```typescript
5 << 1
// 5:  0101
// 結果: 1010 (10)
```

### 6. 右移（>>）
`>>` 運算符將數字的位元向右移動指定的位數，左側補充原符號位（正數補 `0`，負數補 `1`）。右移 n 位等同於除以 2 的 n 次方並取整數部分。

範例：
```typescript
5 >> 1
// 5:  0101
// 結果: 0010 (2)
```

### 7. 無符號右移（>>>）
`>>>` 運算符將數字的位元向右移動指定的位數，左側總是用 `0` 補充，無論數字是正數還是負數。

範例：
```typescript
5 >>> 1
// 5:  0101
// 結果: 0010 (2)

-5 >>> 1
// -5: 11111111111111111111111111111011
// 結果: 01111111111111111111111111111101 (2147483645)
```
*/