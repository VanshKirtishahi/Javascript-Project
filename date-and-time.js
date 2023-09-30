//  Dates

let Dates = Date ()
// console.log(Dates.toString());
// console.log(Dates.toISOString());
// console.log(Dates.toLocaleString());
// console.log(Dates.toJSON());
// console.log(Dates.toLocaleDateString());
// console.log(typeof Dates);



let myCreatedDate = new Date("05-05-2005")

let myTimeStamp = Date.now()

// console.log(Math.floor(Date.now()/ 1000));


let myDate = new Date()
// console.log(myDate);
// console.log(myDate.getMonth () +1 );
// console.log(myDate.getDay ());
// console.log(myDate.getFullYear ());
// console.log(myDate.getHours ());


myDate.toLocaleString('default', {
    weekday: "long",
    
}) 