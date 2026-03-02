/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxWater(arr) {
        // code here
        let n = arr.length;
    if (n <= 2) return 0;

    let left = 0, right = n - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;

    while (left <= right) {
        if (arr[left] <= arr[right]) {
            // If the current left block is smaller than the right, 
            // the leftMax is the limiting factor for this side.
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                totalWater += leftMax - arr[left];
            }
            left++;
        } else {
            // If the current right block is smaller, 
            // the rightMax is the limiting factor.
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            } else {
                totalWater += rightMax - arr[right];
            }
            right--;
        }
    }

    return totalWater;
        
    }
}