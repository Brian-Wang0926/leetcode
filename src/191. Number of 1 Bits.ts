/*
Write a function that takes the binary representation of a positive integer and returns the number of 
set bits
 it has (also known as the Hamming weight).

 

Example 1:

Input: n = 11

Output: 3

Explanation:

The input binary string 1011 has a total of three set bits.

Example 2:

Input: n = 128

Output: 1

Explanation:

The input binary string 10000000 has a total of one set bit.

Example 3:

Input: n = 2147483645

Output: 30

Explanation:

The input binary string 1111111111111111111111111111101 has a total of thirty set bits.
*/

function hammingWeight(n: number): number {
    let count = 0; // 初始化計數器
    while (n !== 0) { // 當 n 不等於0時
        count += n & 1; // 如果最低位是1，計數器加1
        n >>= 1; // 將 n 右移一位
    }
    return count; // 返回計數器的值
}

// 測試用例
const input4 = 11; // 二進位表示 1011
const input5 = 128; // 二進位表示 10000000
const input6 = 2147483645; // 二進位表示 1111111111111111111111111111101

console.log(hammingWeight(input4)); // 輸出 3
console.log(hammingWeight(input5)); // 輸出 1
console.log(hammingWeight(input6)); // 輸出 30

/*
步驟：

初始 n = 11，二進位 1011
第1次迴圈：n & 1 = 1，count = 1，n >>= 1 後 n = 5（0101）
第2次迴圈：n & 1 = 1，count = 2，n >>= 1 後 n = 2（0010）
第3次迴圈：n & 1 = 0，count = 2，n >>= 1 後 n = 1（0001）
第4次迴圈：n & 1 = 1，count = 3，n >>= 1 後 n = 0（0000）
迴圈結束，返回 count = 3
*/