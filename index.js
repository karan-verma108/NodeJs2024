const fs = require('fs');
const path = require('path');

// writing/creating a new file using fs module 
// fs.writeFileSync('read.txt', "hi this is a new file created using file system module in node.js");

// trying to update 
// fs.writeFileSync('read.txt', "i've changed the data let's see it it gets reflected");  //it overrides the previous data

//updating the file content without overriding the previous data
// fs.appendFileSync('read.txt', " now this time this data will be added without overriding the previous one :)")

// reading the file content 
// const fileData = fs.readFileSync('read.txt', "utf-8");
// console.log(fileData);

// renaming the file name 
// fs.renameSync('read.txt', 'readWrite.txt');

// deleting a file 
// fs.unlinkSync('readWrite.txt');

/* creating a new folder 
 fs.mkdir('./new-folder', { recursive: true }, (err) => {
     if (err) {
         console.error('error creating the folder', err);
     } else {
         console.log('folder created succesfull!');
     }
 });*/

/*writing a new file inside of a folder
 const filePath = path.join('./new-folder', 'new-file.txt');
 fs.writeFileSync(filePath, "hello world", (err) => {
     if (err){
         console.error('error creating file', err);
     } else{
         console.log('new file created');
     }
 })*/

/* updating a file inside of a folder 
fs.appendFileSync('./new-folder/new-file.txt', ' more data added');

// reading a file inside of a folder
const fileContent = fs.readFileSync('./new-folder/new-file.txt', "utf-8");
console.log(fileContent); */

/* renaming a file inside of a folder 
 fs.renameSync('./new-folder/new-file.txt', './new-folder/hifile.txt');*/

//to delete a folder/directory
// try {
//     fs.rmdirSync('./new-folder');
//     console.log('directory removed');
// } catch (error) {
//     console.error('error deleting the file', error);
// }

