// Longest subarray with Atmost two distinct integers

// Given an array arr[] consisting of positive integers, your task is to find the length of the longest subarray that contains at most two distinct integers.

// Examples:

// Input: arr[] = [2, 1, 2]
// Output: 3
// Explanation: The entire array [2, 1, 2] contains at most two distinct integers (2 and 1). Hence, the length of the longest subarray is 3.

// Input: arr[] = [3, 1, 2, 2, 2, 2]
// Output: 5
// Explanation: The longest subarray containing at most two distinct integers is [1, 2, 2, 2, 2], which has a length of 5.

// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105



function longestSubarrayWithTwoDistinct(arr) {
    let n = arr.length;
    if (n <= 2) return n;

    let left = 0;
    let maxLen = 0;
    const frequencyMap = new Map();

    for (let right = 0; right < n; right++) {
        // Add current element to map
        let current = arr[right];
        frequencyMap.set(current, (frequencyMap.get(current) || 0) + 1);

        // If we have more than 2 distinct integers, shrink the window
        while (frequencyMap.size > 2) {
            let leftNum = arr[left];
            frequencyMap.set(leftNum, frequencyMap.get(leftNum) - 1);

            // If the count drops to zero, remove it from the map
            if (frequencyMap.get(leftNum) === 0) {
                frequencyMap.delete(leftNum);
            }
            left++;
        }

        // Calculate the window size and update the maximum
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Example Tests:
console.log(longestSubarrayWithTwoDistinct([2, 1, 2]));          // Output: 3
console.log(longestSubarrayWithTwoDistinct([3, 1, 2, 2, 2, 2])); // Output: 5