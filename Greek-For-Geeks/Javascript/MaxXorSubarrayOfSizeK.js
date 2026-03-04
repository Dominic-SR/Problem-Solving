// Given an array of integers arr[]  and a number k. Return the maximum xor of a subarray of size k.

// Examples:

// Input: arr[] = [2, 5, 8, 1, 1, 3], k = 3
// Output: 15
// Explanation: arr[0] ^ arr[1] ^ arr[2] = 15, which is maximum.

// Input: arr[] = [1, 2, 4, 5, 6] , k = 2
// Output: 6
// Explanation: arr[1] ^ arr[2] = 6, which is maximum.

// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 106
// 1 ≤ k ≤ arr.size()

function maxXorSubarray(arr, k) {
    let n = arr.length;
    if (k > n) return 0;

    let currentXor = 0;
    
    // 1. Calculate XOR for the first window of size k
    for (let i = 0; i < k; i++) {
        currentXor ^= arr[i];
    }

    let maxXor = currentXor;

    // 2. Slide the window from index k to n-1
    for (let i = k; i < n; i++) {
        // XOR in the new element and XOR out the oldest element
        currentXor = currentXor ^ arr[i] ^ arr[i - k];
        
        if (currentXor > maxXor) {
            maxXor = currentXor;
        }
    }

    return maxXor;
}

// Example usage:
const arr1 = [2, 5, 8, 1, 1, 3];
const k1 = 3;
console.log(maxXorSubarray(arr1, k1)); // Output: 15

const arr2 = [1, 2, 4, 5, 6];
const k2 = 2;
console.log(maxXorSubarray(arr2, k2)); // Output: 6