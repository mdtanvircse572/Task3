/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

//subtask = 01 for ODD numbers
let num = 61;
while (num <= 100) {
    if (num % 2 === 1) {
        console.log('ODD number is = ', num);
    }
    num++;
}
//subtask = 02 for EVEN numbers
let num2 = 78;
while (num2 <= 98) {
    if (num2 % 2 === 0) {
        console.log('Even number is = ', num2);
    }
    num2++;
}