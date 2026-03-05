// Longest Substring with K Uniques

// You are given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the longest substring that contains exactly k distinct characters.

// Note : If no such substring exists, return -1. 

// Examples:

// Input: s = "aabacbebebe", k = 3
// Output: 7
// Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.

// Input: s = "aaaa", k = 2
// Output: -1
// Explanation: There's no substring with 2 distinct characters.

// Input: s = "aabaaab", k = 2
// Output: 7
// Explanation: The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b', making it the longest valid substring.

// Constraints:
// 1 ≤ s.size() ≤ 105
// 1 ≤ k ≤ 26

class Solution {
    longestKSubstr(s, k) {
        // code here
        let n = s.length;
    if (k === 0 || n === 0) return -1;

    let map = new Map();
    let left = 0;
    let maxLength = -1;

    for (let right = 0; right < n; right++) {
        let charRight = s[right];
        map.set(charRight, (map.get(charRight) || 0) + 1);

        // If we have more than k distinct characters, shrink from the left
        while (map.size > k) {
            let charLeft = s[left];
            map.set(charLeft, map.get(charLeft) - 1);
            if (map.get(charLeft) === 0) {
                map.delete(charLeft);
            }
            left++;
        }

        // If we have exactly k, update the maxLength
        if (map.size === k) {
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }

    return maxLength;
    }
}
