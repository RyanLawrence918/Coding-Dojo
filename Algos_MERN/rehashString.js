/* 
* Given by Riot games.
* Rehashes an incorrectly hashed string by combining letter count occurrences
* and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";


/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(str) {
    let result = "";
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let num = "";
        let key = "";
        if (isNaN(str[i])) {
            key = str[i];
        }
        while (parseInt(str[i + 1]) || str[i + 1] === "0") {
            num += str[i + 1];
            i++;
        }
        if (!obj.hasOwnProperty(key)) {
            obj[key] = parseInt(num);
        } else {
            obj[key] += parseInt(num);
        }
    }
    // console.log(obj);
    let sortedObj = Object.entries(obj).sort(function (a, b) {
        return a[0].localeCompare(b[0]);
    })
    // console.log(sortedObj);
    for (let k = 0; k < sortedObj.length; k++) {
        result += sortedObj[k][0] + sortedObj[k][1];
    }
    // console.log(result);
    return result;
}

console.log(rehash(str1));
/*****************************************************************************/