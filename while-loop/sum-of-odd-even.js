/*programming hero*/

/***
Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let num = 81;
let sum = 0;
while ( num <= 131){
    if(num % 2 === 1){
        console.log("The ODD number = ",num);
        sum = sum + num;
        console.log('SUM OF ODD NUMBERS NOW = ', sum);
    }
    num++;
}
console.log('SO THE FINAL SUM OF ODD NUMBERS ARE =', sum);











/***
Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let num2 = 206;
let sum2 = 0;
while ( num2 <= 311){
    if(num2 % 2 === 0){
        console.log("The EVEN number = ",num2);
        sum2 = sum2 + num2;
        console.log('SUM OF EVEN NUMBERS NOW = ', sum2);
    }
    num2++;
}
console.log('SO THE FINAL SUM OF EVEN NUMBERS ARE =', sum2);



