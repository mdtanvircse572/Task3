/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let num = 1;

while (num <= 100) {
    if (num === 1 || num === 4 || num === 9 || num === 16 || num === 25 || num === 36 || num === 49 || num === 64 || num === 81 || num === 100) {
        console.log(`Found the first square number: ${num}`);
        break;  // Stop the loop when a square number is found
    }
    num++;
}
