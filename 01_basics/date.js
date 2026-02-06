const mydate = new Date()
console.log(mydate);

console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(mydate.toString());
console.log(typeof mydate);

//const newdate = new Date(2020,0,8)// here 0 represents month starting from 0-jan 
const newdate = new Date("1-12-15")
console.log(newdate.toLocaleString());

const newtime = Date.now()
console.log(newtime);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);



// newDate.toLocaleString('default',{
//     weekday: "long",
//     timeZone: 
// })





