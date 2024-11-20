/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


/*programming hero*/
let num = 5; // The number for which we want the multiplication table
let i = 1; // Starting multiplier
// while (i <= 10 ){
//     table = num * i;
//     console.log("multiplicattion table for number 5 =",table);
//     i++;
// }
while(i <= 10){  // Loop until multiplier reaches 10
    console.log(`${num} x ${i} = ${num * i}`); // Display the result

    i++; // Increment the multiplier
}