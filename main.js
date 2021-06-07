

var containerDiv = document.createElement('div');
containerDiv.classList.add("container")

var calenderDiv = document.createElement('div');
calenderDiv.classList.add("calender")

var monthDiv = document.createElement('div');
monthDiv.classList.add("month")

document.body.append(containerDiv)
containerDiv.append(calenderDiv);
calenderDiv.append(monthDiv);

var trying = "fas fa-angle-double-left";
italicObject1 = document.createElement('I')
italicObject1.setAttribute("class", "fas fa-angle-double-left prev")
monthDiv.appendChild(italicObject1);

var dateDiv = document.createElement('div');
dateDiv.classList.add("date");
monthDiv.append(dateDiv);

var heading1_1 = document.createElement('h1');
// heading1_1.append("June");

var paragraph1_1 = document.createElement('p');
// paragraph1_1.append("June 7 2021");

dateDiv.appendChild(heading1_1);
dateDiv.append(paragraph1_1);

var trying = "fas fa-angle-double-right";
italicObject2 = document.createElement('I')
italicObject2.setAttribute("class", "fas fa-angle-double-right next")
monthDiv.appendChild(italicObject2);

var weekdaysDiv = document.createElement('div');
weekdaysDiv.classList.add("weekdays");
calenderDiv.append(weekdaysDiv);

// var ndiv = document.createElement('div');
// weekdaysDiv.append(ndiv);
var daysArrays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

for (x = 0; x <= 6; x++) {
    var ndiv = document.createElement('div');
    weekdaysDiv.append(ndiv);
    ndiv.append(daysArrays[x]);
}

var daysDiv = document.createElement('div');
daysDiv.classList.add("days")
calenderDiv.append(daysDiv);

// var preDaysArray =[30,31];

// for (y = 30; y<3; y++){
//     var preDaysDiv = document.createElement('div');
//     daysDiv.append(preDaysDiv);
//     preDaysDiv.append(y)
//     preDaysDiv.classList.add("prev-date");
// }

// for (z = 1; z<=31; z++){
//     var dates = document.createElement('div');
//     daysDiv.append(dates);
//     if(z===7){
//         dates.classList.add("today")
//     }
//     dates.append(z);
// }

// var nextDaysArray =[1,2,3];

// for (i = 1; i<4; i++){
//     var nextDaysDiv = document.createElement('div');
//     daysDiv.append(nextDaysDiv);
//     nextDaysDiv.append(i)
//     nextDaysDiv.classList.add("next-date");
// }



//############################Calender-Operation##############################
const date = new Date(); //predefined constructor

const renderCalender = () => {let monthDays = document.querySelector(".days");

date.setDate(1);
// date.getDay(1);
// console.log(date.getDate());
// console.log(date.getDay());
// date.setMonth(0);

let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
console.log(lastDay);

let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

let lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();


let FirstDay = date.getDay();
console.log(FirstDay);

const months = [
    "January",
    "February",
    "March",
    "Apirl",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];
document.querySelector('.date p').innerHTML = date.toDateString(); //.toDateString(); is get the date of current day; 

let days = "";

for (let x = FirstDay; x > 0; x--) {
    days += `<div class ="prev-date">${prevLastDay - x + 1}</div>`;
}


for (let i = 1; i <= lastDay; i++) {
    if(i===date.getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class ="today">${i}</div>`;
    }else{
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
}}


for (let x = FirstDay; x > 0; x--) {
    days += `<div class ="prev-date">${prevLastDay - x + 1}</div>`;
}

}

renderCalender();
// const month = date.getMonth(); //getmonth() is a predefined method of date constructor and is used to get the month

// let next_Days = 6-lastDayIndex;
// for (let j=1; j<=next_Days; x++){
//     days+=`<div class ="next-date">${j}</div>`;
//     monthDays.innerHTML=days;
// }

document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalender();
    
})

document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalender();
       
})
renderCalender();

