// Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.



// Example 1:

// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].

const runningSum = (nums) => {

    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1]
    }

    return nums
};

// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums(from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.



// Example 1:

// Input: nums = [-3, 2, -3, 4, 2]
// Output: 5

function minStartValue(nums) {
    let startValue = 1
    while (true) {
        let acc = startValue
        for (let i = 0; i < nums.length; i++) {
            acc += nums[i]
            if (acc < 1) break
            if (i === nums.length - 1) return startValue
        }
        startValue++
    }
};