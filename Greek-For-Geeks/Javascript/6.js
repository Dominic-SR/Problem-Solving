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