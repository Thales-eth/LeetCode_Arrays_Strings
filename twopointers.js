// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// 1) https://leetcode.com/problems/valid-palindrome/

const isPalindrome = (s) => {
    const regex = /[^a-z0-9]/g
    const cleanSentence = s.toLowerCase().replace(regex, "")

    let left = 0
    let right = cleanSentence.length - 1

    while (left <= right) {

        if (cleanSentence[left] !== cleanSentence[right]) return false

        left++
        right--
    }

    return true
};

// MERGE 2 SORTED ARRAYS

// You are given two integer arrays nums1 and nums2, sorted in non - decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non - decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.nums2 has a length of n.

// 2) https://leetcode.com/problems/merge-sorted-array/

// Example 1:

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
// Explanation: The arrays we are merging are[1, 2, 3] and[2, 5, 6].
// The result of the merge is[1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.

const merge = (nums1, m, nums2, n) => {
    let i = 0
    let j = 0

    const ans = []

    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            ans.push(nums1[i])
            i++
        }

        else if (nums2[j] < nums1[i]) {
            ans.push(nums2[j])
            j++
        }
    }

    while (i < m) {
        ans.push(nums1[i])
        i++
    }

    while (j < n) {
        ans.push(nums2[j])
        j++
    }

    for (let i = 0; i < ans.length; i++) {
        nums1[i] = ans[i]
    }
};


// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some(can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// 3) https://leetcode.com/problems/is-subsequence/

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

const isSubsequence = (s, t) => {
    if (s.length > t.length) return false

    let i = 0
    let j = 0

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++
        }

        j++
    }

    return i === s.length
}

// Write a function that reverses a string.The input string is given as an array of characters s.

// You must do this by modifying the input array in -place with O(1) extra memory.

// 4) https://leetcode.com/problems/reverse-string/submissions/

var reverseString = (s) => {
    let i = 0, j = s.length - 1

    while (i < j) {
        const tmp = s[i]
        s[i] = s[j]
        i++
        s[j] = tmp
        j--
    }

    return s
};

// SECOND SOLUTION:

var reverseString = (s) => {
    let i = 0, j = s.length - 1

    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++
        j--
    }

    return s
};

// Given an integer array nums sorted in non - decreasing order, return an array of the squares of each number sorted in non - decreasing order.

// Example 1:

// Input: nums = [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]
// Explanation: After squaring, the array becomes[16, 1, 0, 9, 100].
// After sorting, it becomes[0, 1, 9, 16, 100].

// 5) https://leetcode.com/problems/squares-of-a-sorted-array/description/

const sortedSquares = (nums) => {
    let i = 0
    let j = nums.length - 1

    const orderedNumbers = []

    while (i <= j) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            orderedNumbers.unshift(nums[i] ** 2)
            i++
        }

        else {
            orderedNumbers.unshift(nums[j] ** 2)
            j--
        }
    }

    return orderedNumbers
};
