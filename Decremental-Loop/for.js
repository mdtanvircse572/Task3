/**----------[Example of Incremental for loop] 
 * for(let i = 0; i<=10; i++ ){
 *  console.log(i);
 *}
 **----------[Example of Incremental while loop]
 * let num = 11;
 *let sum = 0;
 *while(num <= 20){
 *    console.log(num);
 *    sum = sum + num;
 *    num ++;
 *}
 *console.log("sum of numbers from 11 to 20 is = ", sum);
*/
// Example Of Decremental for loop
// for(let i = 10; i>=0; i--){
//     console.log(i);
// }
let sum = 0;
for (let num = 20; num>=11; num--){
    console.log(num)
    sum = num - sum;
    console.log(sum)
}
console.log('thefinal sum is = ', sum)
// Example Of Decremental while loop
// let i = 10;
// while(i >= 0 ){
//     console.log(i);
//     i--;
// }
// let num = 20;
// let sum = 0;
// while(num >= 0){
//     sum = num - sum;
//     console.log(num);
//     num--;
// }
// console.log("final sum is =",sum);