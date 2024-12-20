'use strict';

let arr = [2, 4, 9, 10, 45, 67, 8, 90]

let o = 0

console.log(arr);

for (let o = 1; o < arr.length; o++) {
    if (o % 2) {
        console.log(arr[o], 'bu juft son');
    } else {
        console.log(arr[o] + ' ' + 'bu toq son');
    }
}