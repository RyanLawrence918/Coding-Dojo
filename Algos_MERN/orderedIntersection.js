/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.

    Output: only the shared values between the two arrays (deduped).

    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

// const numsA1 = [0, 1, 2, 2, 2, 7];
// const numsB1 = [2, 2, 6, 6, 7];
// const expected1 = [2, 7];

// const numsA2 = [0, 1, 2, 2, 2, 7];
// const numsB2 = [2, 2];
// const expected2 = [2];

// const numsA3 = [0, 1, 2, 2, 2, 7];
// const numsB3 = [10];
// const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    //create variables to iterate through array starting at index 0 
    let i = 0;
    let j = 0;
    //empty array to hold the results 
    let temp = [];
    //loop through array here
    while (i<sortedA.length && j<sortedB.length){
        //compares to see if they equal
        if (sortedA[i] == sortedB[j]){
            //check if new array 
            if(temp[temp.length -1] != sortedA[i]){
                temp.push(sortedA[i])

            }
            
            i++;
            j++;
    }
    else if (sortedA[i]<sortedB[j]){
        i++
    }
    else{
        j++;
    }
}
return temp;
}


const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

console.log(orderedIntersection(numsA1, numsB1));