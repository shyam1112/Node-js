const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName",()=>{
    console.log("My name is shyam");
})

event.emit("sayMyName");

event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and msg is ${msg}`);
});
event.emit("checkpage",200,"ok");