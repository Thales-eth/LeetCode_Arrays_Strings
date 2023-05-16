// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

function reverseWords(s) {
    const words = s.split(" ")
    for (let i = 0; i < words.length; i++) {
        let left = 0
        let right = words[i].length - 1
        const letters = words[i].split("")
        while (left <= right) {
            [letters[left], letters[right]] = [letters[right], letters[left]]
            left++
            right--
        }
        words[i] = letters.join("")
    }
    return words.join(" ")
};

// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters(lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"

function reverseOnlyLetters(s) {
    s = s.split("")

    let left = 0
    let right = s.length - 1
    const regex = /[a-zA-Z]/

    while (left < right) {
        if (s[left].match(regex)
            && s[right].match(regex)
        ) {
            [s[left], s[right]] = [s[right], s[left]];
            left++
            right--
        }

        else if (!s[left].match(regex)
            && s[right].match(regex)
        ) {
            left++
        }

        else if (s[left].match(regex)
            && !s[right].match(regex)
        ) {
            right--
        }

        else {
            left++
            right--
        }

    }

    return s.join("")
};

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in -place without making a copy of the array.

// Example 1:

// Input: nums = [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function moveZeroes(nums) {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++
        }
    }
    return nums
}

// Given a 0 - indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch(inclusive).If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3(inclusive).The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3(inclusive), the resulting string is "dcbaefd".

function reversePrefix(word, ch) {
    if (!word.includes(ch)) return word

    const index = word.indexOf(ch)

    const letters = word.split("")

    let left = 0
    let right = index

    while (left < right) {
        [letters[left], letters[right]] = [letters[right], letters[left]]

        left++
        right--
    }

    return letters.join("")
};


// ====================================================================================

// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target.If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2, 3, 1, 2, 4, 3]
// Output: 2
// Explanation: The subarray[4, 3] has the minimal length under the problem constraint.

function minSubArrayLen(target, nums) {
    let left = 0
    let acc = 0
    let ans = Infinity

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === target) return 1

        acc += nums[right]

        while (acc >= target) {
            ans = Math.min(ans, right - left + 1)
            acc -= nums[left]
            left++
        }
    }

    return ans === Infinity ? 0 : ans
};

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

function maxVowels(s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"])
    let left = 0
    let vowelCounter = 0
    let ans = 0

    for (let right = 0; right < s.length; right++) {
        if (vowels.has(s[right])) vowelCounter++

        if ((right - left + 1) === k) {
            ans = Math.max(ans, vowelCounter)
            if (vowels.has(s[left])) {
                vowelCounter--
            }
            left++
        }
    }

    return ans
};

// You are given two strings s and t of the same length and an integer maxCost.

// You want to change s to t.Changing the ith character of s to ith character of t costs | s[i] - t[i] | (i.e., the absolute difference between the ASCII values of the characters).

// Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost.If there is no substring from s that can be changed to its corresponding substring from t, return 0.

// Example 1:

// Input: s = "abcd", t = "bcdf", maxCost = 3
// Output: 3
// Explanation: "abc" of s can change to "bcd".
// That costs 3, so the maximum length is 3.

function equalSubstring(s, t, maxCost) {
    let left = 0
    let acc = 0
    let ans = 0

    for (let right = 0; right < s.length; right++) {
        function getCost(i) {
            return Math.abs(t[i].charCodeAt() - s[i].charCodeAt())
        }
        acc += getCost(right)

        while (acc > maxCost) {
            acc -= getCost(left)
            left++
        }

        ans = Math.max(ans, right - left + 1)
    }

    return ans
};

// ====================================================================================

// There is a biker going on a road trip.The road trip consists of n + 1 points at different altitudes.The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all(0 <= i < n).Return the highest altitude of a point.

// Example 1:

// Input: gain = [-5, 1, 5, 0, -7]
// Output: 1
// Explanation: The altitudes are[0, -5, -4, 1, 1, -6].The highest is 1.


function largestAltitude(gain) {
    let acc = 0
    let ans = 0
    for (let i = 0; i < gain.length; i++) {
        acc += gain[i]
        ans = Math.max(ans, acc)
    }

    return ans
};

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.This also applies to the right edge of the array.

// Return the leftmost pivot index.If no such index exists, return -1.

// Example 1:

// Input: nums = [1, 7, 3, 6, 5, 6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

function pivotIndex(nums) {
    const prefix = [nums[0]]
    for (let i = 1; i < nums.length; i++) prefix.push(nums[i] + prefix[prefix.length - 1])
    for (let i = 0; i < prefix.length; i++) {
        const leftPrefix = i === 0 ? 0 : prefix[i - 1] - prefix[0] + nums[0]
        const rightPrefix = i === prefix.length - 1 ? 0 : prefix[prefix.length - 1] - prefix[i + 1] + nums[i + 1]
        if (leftPrefix === rightPrefix) return i
    }
    return -1
};

// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive(i.e.nums[left] + nums[left + 1] + ... + nums[right]).

//     Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

const NumArray = function (nums) {
    this.nums = nums
};

NumArray.prototype.sumRange = function (left, right) {
    const prefix = [this.nums[0]]
    for (let i = 1; i < this.nums.length; i++) {
        prefix.push(this.nums[i] + prefix[i - 1])
    }
    return prefix[right] - prefix[left] + this.nums[left]
};
