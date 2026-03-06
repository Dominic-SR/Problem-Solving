// Smallest window containing all characters

// Given two strings s and p. Find the smallest substring in s consisting of all the characters (including duplicates) of the string p. Return empty string in case no such substring is present.
// If there are multiple such substring of the same length found, return the one with the least starting index.

// Examples:

// Input: s = "timetopractice", p = "toc"
// Output: "toprac"
// Explanation: "toprac" is the smallest substring in which "toc" can be found.

// Input: s = "zoomlazapzo", p = "oza"
// Output: "apzo"
// Explanation: "apzo" is the smallest substring in which "oza" can be found.

// Input: s = "zoom", p = "zooe"
// Output: ""
// Explanation: No substring is present containing all characters of p.

// Constraints: 
// 1 ≤ s.length(), p.length() ≤ 106
// s, p consists of lowercase english letters 
 
 if (p.length > s.length) return "";

    const mapP = {};
    for (const char of p) {
        mapP[char] = (mapP[char] || 0) + 1;
    }

    const windowMap = {};
    let have = 0;
    const need = Object.keys(mapP).length;
    
    let resLen = Infinity;
    let resIdx = -1;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        windowMap[char] = (windowMap[char] || 0) + 1;

        if (mapP[char] !== undefined && windowMap[char] === mapP[char]) {
            have++;
        }

        while (have === need) {
            // Update result if smaller window found
            if ((right - left + 1) < resLen) {
                resLen = right - left + 1;
                resIdx = left;
            }

            // Shrink from the left
            const leftChar = s[left];
            windowMap[leftChar]--;
            if (mapP[leftChar] !== undefined && windowMap[leftChar] < mapP[leftChar]) {
                have--;
            }
            left++;
        }
    }

    return resIdx === -1 ? "" : s.substring(resIdx, resIdx + resLen);