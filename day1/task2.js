let fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf8');

// clean data
let submarineData = data.split(/\s+/)
submarineData = submarineData.map(x => Number(x))

let counter = 0;

submarineData.forEach((current, i, arry)=>{
    if(i<arry.length-1){
        A = arry[i] + arry[i+1] + arry[i+2]
        B = arry[i+3] + arry[i+1] + arry[i+2]
       if(A < B){
           counter++
       }
    }
})

console.log("my answer", counter) 