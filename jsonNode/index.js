const { log } = require('console');
const fs = require('fs');

const bioData = {
    name: 'karan',
    age: 24,
    profession: 'mern stack developer'
};

//  1) convert it to json 

// console.log(bioData);
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

//  2) add it in a different file
//  so we are going to require fs module in order to add this json data in that newly created file

// fs.writeFile('newfile.json', jsonData, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('file created succesfully!');
//     }
// }); 

/* fs.unlink('./newfile.json', (err)=>{
     if(err){
         console.error(err);
     }
     else{
         console.log('file deleted');
     }
 }) */

/*  3) let's read the file here

fs.readFile('./newfile.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
}) */

// 4) again convert back to javascript object from json format 

// const objData = JSON.parse(jsonData);
// console.log(objData);

// 5) let's try to append it 

// fs.appendFile('./newfile.json', 'location', (err)=>{
//     if(err){
//         console.error(err);
//     } else{
//         console.log('file appended');
//     }
// });
