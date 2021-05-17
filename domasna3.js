/* 1. Declare variables and use the assignment operators ( print the results) */

let d = 12;
let m = 16;
let j = 20;
let t = 26;
let v = 38;

d += 16;
console.log('d=', d);

m -= 12;
console.log('m=', m);

j *= -13;
console.log('j=', j);

t /= 7;
console.log("t=", t);

v %= 4;
console.log('v=', v);


//2. Write a JavaScript conditional statement to sort three numbers. Print the result.

let x = 128;
let y = 77; 
let z = 212;

if (x > y && z > y) {

    if (y < x){
    console.log('From biggest so smallest', z, x, y)
    } else (x > z) 
        console.log('From smallest to biggest', y, x, z)
    };
    
    
//3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade.   
let average = (80 + 77 + 88 + 95 + 68) / 5 ;

if (average < 60) {
    console.log('Grade F');
} else if (average < 70) {
    console.log('Grade D');
} else if (average < 80) {
    console.log('Grade C');
} else if (average < 90) {
    console.log('Grade B');
} else if (average < 100) {
    console.log('Grade A')
} ;

//4. For a given day, print out whether it is a day of the work week or weekend.

let day = 'Tuesday';

switch(day) {
    case 'Monday':
        console.log('Week day');
        break;
        case 'Tuesday':
            console.log('Week day') ;
            break;
        case 'Wednesday':
            console.log('Week day');
            break;
        case 'Thursday':
            console.log('Week day');
        break;
        case 'Friday':
            console.log('Week day');
            break;
        case 'Saturday':
            console.log('Weekend');
            break;
        case 'Sunday':
            console.log('Weekend');
            break;
}; 



//5. For a given month, print out in which season it belongs.

let month = 'July' ;


switch(month) {
    case 'January': 
        console.log('winter');
        break;
    case 'February' :
        console.log('winter');
        break;
    case 'March':
        console.log('spring');
        break;
    case 'April':
        console.log('spring');
        break;
    case 'May':
        console.log('spring');
        break;
    case 'June':
        console.log('summer');
        break;
    case 'July':
        console.log('summer');
        break;
    case 'August':
        console.log('summer');
        break;
    case 'September':
        console.log('autmn');
        break;
    case 'October':
        console.log('autumn');
        break;
    case 'November':
        console.log('autumn');
        break;
    case 'December':
        console.log('winter');
        break;
};
