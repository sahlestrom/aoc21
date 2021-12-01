let fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf8');

// clean data
let submarineData = data.split(/\s+/)
submarineData = submarineData.map(x => Number(x))

let counter = 0;
submarineData.reduce((_, current, i, arry)=>{    
        if(current>arry[i-1])
        {
            counter++
        }
} )

console.log("my answer", counter) 