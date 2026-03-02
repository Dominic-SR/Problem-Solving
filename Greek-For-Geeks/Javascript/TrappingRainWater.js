// Given an array arr[] with non-negative integers representing the height of blocks. If the width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 

// Examples:

// Input: arr[] = [3, 0, 1, 0, 4, 0 2]
// Output: 10
// Explanation: Total water trapped = 0 + 3 + 2 + 3 + 0 + 2 + 0 = 10 units.

// IMAGE REFERENCE  ..\Assets\Images\TrappingRainWater.png

// Input: arr[] = [3, 0, 2, 0, 4]
// Output: 7
// Explanation: Total water trapped = 0 + 3 + 1 + 3 + 0 = 7 units.

// Input: arr[] = [1, 2, 3, 4]
// Output: 0
// Explanation: We cannot trap water as there is no height bound on both sides.

// Input: arr[] = [2, 1, 5, 3, 1, 0, 4]
// Output: 9
// Explanation: Total water trapped = 0 + 1 + 0 + 1 + 3 + 4 + 0 = 9 units.

// Constraints:
// 1 < arr.size() < 105
// 0 < arr[i] < 103

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