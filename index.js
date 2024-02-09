const fs = require('fs');

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
fs.unlinkSync('readWrite.txt');