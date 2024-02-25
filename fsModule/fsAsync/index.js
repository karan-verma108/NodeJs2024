const fs = require('fs');

// writing a new file asynchronously 
fs.writeFile('new.txt', 'hi this file is created using the fs module in node, but with asynchronous way', (err) => {
    if(err){
        console.error(err);
    } else{
        console.log('file is created');
    }
});

// appending a file asynchrnously
// fs.appendFile('file.txt', ' now im appending this file :)', (err)=>{
//     if(err){
//         console.error(err);
//     } else{
//         console.log('file appended');
//     }
// });

// // reading this file asynchronously 
// fs.readFile('../extra', 'utf-8', (err,data)=>{
//     if(err){
//         console.error(err);
//     }else{
//         console.log(data);
//     }
// })