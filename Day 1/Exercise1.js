// no.1
let w = 5;
let l = 7;
const areaOfRect = w * l;

console.log(areaOfRect);

// no.2
const periOfRect = 2 * ( w + l );

console.log(periOfRect);

// no.3 (diameter)
let r = 4;
const diameter = 2 * r;

console.log(diameter);

// no.3 (circumference)
let pi = 3.14;
const circumference = 2 * pi * r;

console.log(circumference);

// no.3 (area of circle)
const areacirc = pi * r * r;

console.log(areacirc);

// no.4 
let angles1 = 20;
let angles2 = 40;
const triangleAngles = 180 - angles1 - angles2;

console.log(triangleAngles);

// no.5 "day = hari ini" "day1 = tgl 4 nov"
const d = new Date()
const d1 = new Date('2022-11-4')
let day = d.getDate()
let day1 = d1.getDate()
const perbandingan = day - day1
console.log(perbandingan);

// no.6
const dayy = 400;

var years = Math.floor(dayy / 365);
var months = Math.floor(dayy % 365 / 30);
var days = Math.floor(dayy % 365 % 30);

console.log(`${years} year ${months} month ${days} day`);

//test