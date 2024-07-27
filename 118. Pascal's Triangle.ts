/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/

function generate(numRows: number): number[][] {
  // 初始化結果列表
  const result: number[][] = [];

  // 依次生成每一行
  for (let i = 0; i < numRows; i++) {
    // 初始化當前行，所有數字設置為 1
    const row: number[] = new Array(i + 1).fill(1);

    // 填充當前行的中間部分
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    // 將當前行加入結果列表
    result.push(row);
  }

  return result;
}

/*

好的，讓我們通過詳細的範例來拆解這個生成楊輝三角的過程。

### 目標
我們需要生成 `5` 行的楊輝三角：
```
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
]
```

### 程式碼
```typescript
function generate(numRows: number): number[][] {
    // 初始化結果列表
    const result: number[][] = [];
    
    // 依次生成每一行
    for (let i = 0; i < numRows; i++) {
        // 初始化當前行，所有數字設置為 1
        const row: number[] = new Array(i + 1).fill(1);
        
        // 填充當前行的中間部分
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        
        // 將當前行加入結果列表
        result.push(row);
    }
    
    return result;
}
```

### 範例拆解

#### 初始化
首先，我們初始化一個結果列表 `result`，用來存儲每一行的數字：
```typescript
const result: number[][] = [];
```

#### 生成每一行

1. **第一行** (`i = 0`):
    - 初始化當前行 `row`：
      ```typescript
      const row: number[] = new Array(0 + 1).fill(1); // [1]
      ```
    - 將當前行加入結果列表：
      ```typescript
      result.push(row); // result = [[1]]
      ```

2. **第二行** (`i = 1`):
    - 初始化當前行 `row`：
      ```typescript
      const row: number[] = new Array(1 + 1).fill(1); // [1, 1]
      ```
    - 將當前行加入結果列表：
      ```typescript
      result.push(row); // result = [[1], [1, 1]]
      ```

3. **第三行** (`i = 2`):
    - 初始化當前行 `row`：
      ```typescript
      const row: number[] = new Array(2 + 1).fill(1); // [1, 1, 1]
      ```
    - 填充當前行的中間部分：
      - 對於 `j = 1`：
        ```typescript
        row[1] = result[1][0] + result[1][1]; // 1 + 1 = 2
        row = [1, 2, 1]
        ```
    - 將當前行加入結果列表：
      ```typescript
      result.push(row); // result = [[1], [1, 1], [1, 2, 1]]
      ```

4. **第四行** (`i = 3`):
    - 初始化當前行 `row`：
      ```typescript
      const row: number[] = new Array(3 + 1).fill(1); // [1, 1, 1, 1]
      ```
    - 填充當前行的中間部分：
      - 對於 `j = 1`：
        ```typescript
        row[1] = result[2][0] + result[2][1]; // 1 + 2 = 3
        row = [1, 3, 1, 1]
        ```
      - 對於 `j = 2`：
        ```typescript
        row[2] = result[2][1] + result[2][2]; // 2 + 1 = 3
        row = [1, 3, 3, 1]
        ```
    - 將當前行加入結果列表：
      ```typescript
      result.push(row); // result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
      ```

5. **第五行** (`i = 4`):
    - 初始化當前行 `row`：
      ```typescript
      const row: number[] = new Array(4 + 1).fill(1); // [1, 1, 1, 1, 1]
      ```
    - 填充當前行的中間部分：
      - 對於 `j = 1`：
        ```typescript
        row[1] = result[3][0] + result[3][1]; // 1 + 3 = 4
        row = [1, 4, 1, 1, 1]
        ```
      - 對於 `j = 2`：
        ```typescript
        row[2] = result[3][1] + result[3][2]; // 3 + 3 = 6
        row = [1, 4, 6, 1, 1]
        ```
      - 對於 `j = 3`：
        ```typescript
        row[3] = result[3][2] + result[3][3]; // 3 + 1 = 4
        row = [1, 4, 6, 4, 1]
        ```
    - 將當前行加入結果列表：
      ```typescript
      result.push(row); // result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
      ```

### 最終結果
```typescript
return result;
```

最終生成的結果是：
```plaintext
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
]
```

這樣，我們就生成了前 `5` 行的楊輝三角，並且詳細說明了每一步驟的操作。如果還有其他問題，請隨時告訴我！
 */
