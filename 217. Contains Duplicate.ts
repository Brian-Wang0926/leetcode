// https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// 說明：
// Set 是一種資料結構，它只會存儲唯一的值，因此如果 nums 中有重複的數字，這些重複的數字在 Set 中只會出現一次。


function containsDuplicate(nums: number[]): boolean {
    return (new Set(nums).size < nums.length)
};