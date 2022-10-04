/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ac";
const T1 = "ac";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "";
const T2 = "";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let sSkipCount = 0;
    let tSkipCount = 0;

    while (i >= 0 || j >= 0) {
        if (S[i] === "#") {
        sSkipCount++;
        i--;
    } else if (sSkipCount > 0 && i >= 0) {
        sSkipCount--;
        i--;
    } else if (T[j] === "#") {
        tSkipCount++;
        j--;
    } else if (tSkipCount > 0 && j >= 0) {
        tSkipCount--;
        j--;
    } else if (S[i] !== T[j]) {
        return false;
    } else {
        i--;
        j--;
    }
    }
    return true;
}

console.log(backspaceStringCompare(S1, T1));
