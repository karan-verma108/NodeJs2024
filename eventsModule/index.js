const EventEmitter = require('events');
const event = new EventEmitter();

event.on('nameEvent', ()=>{
    console.log('your name is don');
});

event.emit('nameEvent'); 
event.emit('nameEvent');   //this will run as many times as called

event.once('checkStatus', (statusCode, message)=>{
    console.log(`The status code is ${statusCode} and the message is ${message}`);
});

event.emit('checkStatus', 200, 'ok');  //this will run only once
event.emit('checkStatus', 200, 'ok');