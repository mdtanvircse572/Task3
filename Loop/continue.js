//continue = skip this one or rest of the code for the iteration;
//break =  i am done with loop or loop end
// for (let i = 1; i < 10; i++){
//     if(i % 2 === 1 ){
//         continue;
//     }
//     console.log(i);
// }

let n = 0; 
while (n < 15){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
}