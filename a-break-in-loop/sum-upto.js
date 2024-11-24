/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i = 1; 
let sum = 0; 
while (i <= 50) { 
    sum = sum + i; 
    console.log(`Current number: ${i}, Current sum: ${sum}`);
    if (sum >= 100) { 
        console.log("Sum has reached or exceeded 100. Exiting loop.");
        break; 
    }
    i++;
}

console.log ('ITS TIME FOR FOR-LOOP');

sum = 0;
for(i = 1; i<= 50; i++){
    sum = sum + i;
    console.log(`Current numbers: ${i}, Current sum: ${sum}`);
    if(sum > 100){
        console.log('Sum has reached or exceeded 100. Exiting loop.');
        break;
    }
}
