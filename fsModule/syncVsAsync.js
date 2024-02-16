const fs = require('fs');

/* let's read a file using sync first

it first reads the file and no matter how much time it will take, it will first read and print this file (perform this action), only then it will go the other task (even if it takes way lesser than to be accomplished)
const fileData = fs.readFileSync('extra', 'utf-8');
console.log(fileData);
console.log('some more data after the file is read');*/

// now let's do it with async 
fs.readFile('extra', 'utf-8', (err,data)=>{
    if(err){   
        console.error(err);
    }else{
        console.log(data);
    }
})
console.log('some more data after the file is read');  //in this case, this line of code is being executed first as it doesnt required tobe fetched from another file, so taking lesser time than the above step
