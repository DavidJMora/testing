// let arr1 = [[1,2], [3, 4]];
// let result = arr1.flat();

// console.log(result);

// let arr2 = [[1, 2], [[3, 4], [5, 6]]];
// result2 = arr2.flat();

// console.log(result2);

// let arr3 = [[1, 2], [[3, 4], [5, 6]]];
// result3 = arr3.flat(2);

// console.log(result3);

// let arr4 = [[[1, 2]], [[3, 4]], [[5, 6]], [7, 8]];

// result4 = arr4.flat(2);

// console.log(result4);


/**
 * Syntax: var new_array - arr.flatMap(function callback(currentValue[, index[, array]]) {
 * return element for new_array
 * })
 */

// let array1 = [1, 2, 3, 4];
// let r1 = array1.map(x => [x * 2]);  

// console.log(r1);    /** [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ] */

// let r2 = r1.flatMap(x => [x * 2]);

// console.log(r2);    /** [ 4, 8, 12, 16 ] */

// let r3 = r1.flatMap(x => [[x * 2]]);

// console.log(r3);    /** [ 4 ], [ 8 ], [ 12 ], [ 16 ] ] */

// let array2 = ["it's Sunny in", "", "California"];
// array2 = array2.map(x => x.split(" "));
// // console.log(array2); /** [ [ "it's", 'Sunny', 'in' ], [ '' ], [ 'California' ] ]  */

// array2 = array2.flatMap(x => x.join(" ")); /**  [ "it's Sunny in", '', 'California' ]  */
// console.log(array2);

let array3 = [5, 4, -3, 20, 17, -33, -4, 18];

array3 = array3.flatMap(x => 
    (x < 0) ? [] :
    (x % 2 === 0) ? [x] : [(x -1), 1]
);

console.log(array3);


