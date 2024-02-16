const fs = require('fs');

//create a folder named karan
// fs.mkdir('karan', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('folder created');
//     }
// })

// create a file inside of it named mango.txt and write data into it
// fs.writeFile('./karan/mango.txt', 'mango is my favourite fruit', (err)=>{
//     if(err){
//         console.error(err);
//     }else{
//         console.log('file written succesully');
//     }
// })

// add more data into the file at the end of the existing data
// fs.appendFile('./karan/mango.txt', ' and i also like apple', (err)=>{
//     if(err){
//         console.error(err);
//     }else{
//         console.log('file appended');
//     }
// })

// read the file without getting the buffer data 
// fs.readFile('./karan/mango.txt', 'utf-8', (err,data)=>{
//     if(err){
//         console.error(err);
//     }else{
//         console.log(data);
//     }
// })

// rename the filename to apple.txt
// fs.rename('./karan/mango.txt', './karan/apple.txt', (err)=>{
//     if(err){
//         console.error(err);
//     }else{
//         console.log('file named changed');
//     }
// });

// now delete both the file and the folder 
// fs.unlink('./karan/apple.txt', (err)=>{
//     if(err){
//         console.error(err);
//     }else{
//         console.log('file deleted');
//     }
// })

fs.rmdir('./karan', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('directory removed');
    }
})