import { sortList, ListNode } from "@/148. Sort List";

// 輔助函數
// 將數字陣列轉換為鏈表
function arrayToList(arr: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// 將鏈表轉換回數字陣列
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe("sortList", () => {
  test("空鏈表", () => {
    expect(sortList(null)).toBeNull();
  });

  test("單節點鏈表", () => {
    const list = new ListNode(1);
    const sorted = sortList(list);
    expect(listToArray(sorted)).toEqual([1]);
  });

  test("已排序的鏈表", () => {
    const list = arrayToList([1, 2, 3, 4, 5]);
    const sorted = sortList(list);
    expect(listToArray(sorted)).toEqual([1, 2, 3, 4, 5]);
  });

  test("逆序的鏈表", () => {
    const list = arrayToList([5, 4, 3, 2, 1]);
    const sorted = sortList(list);
    expect(listToArray(sorted)).toEqual([1, 2, 3, 4, 5]);
  });

  test("包含重複元素的鏈表", () => {
    const list = arrayToList([3, 1, 2, 3, 2, 1]);
    const sorted = sortList(list);
    expect(listToArray(sorted)).toEqual([1, 1, 2, 2, 3, 3]);
  });

  test("正數和負數混合的鏈表", () => {
    const list = arrayToList([-1, 5, 3, -7, 4, 0]);
    const sorted = sortList(list);
    expect(listToArray(sorted)).toEqual([-7, -1, 0, 3, 4, 5]);
  });

  test("大型鏈表", () => {
    const arr = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000)
    );
    const list = arrayToList(arr);
    const sorted = sortList(list);
    expect(listToArray(sorted)).toEqual(arr.sort((a, b) => a - b));
  });
});
