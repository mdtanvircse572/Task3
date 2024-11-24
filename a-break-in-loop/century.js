for(let i = 1; i <= 200; i++){
    console.log(i);
    if(i === 100){
        console.log('got the century')
        break;
    }
}

console.log('its time for while loop');

let n = 1;
while(n <= 200){
    console.log(n);
    n++;
    if( n === 100){
        console.log('got century from while');
        break;
    }
}