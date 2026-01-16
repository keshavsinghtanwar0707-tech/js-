let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());// Fri Jan 16 2026 12:28:59 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());

let mycreatedate= new Date(2026,3,30,14,4,6)
console.log(mycreatedate.toLocaleString());

let mycreatedate1= new Date("2026-01-14")
console.log(mycreatedate1.toLocaleString());


let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreatedate1.getTime());

console.log (Math.floor(Date.now()/1000));

 let newDate= new Date();
console.log (`${newDate.getFullYear()} and the time`)
console.log (`${newDate.getDay()} and the time`)
console.log (`${newDate.getDate()} and the time`)


newDate.toLocaleString('default',{
weekday:"long"
})