/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
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
