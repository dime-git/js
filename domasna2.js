// Declare variables and use all the different opperators that were shown (print the results)

//arithmetic operators
/*
    + -  addition
    - -  substraction
    *    multiplication
    /    division
    %    modulus (remainder)
    + +  increment (add +1 on the value of the variable)
    - -  decreamen (substract -1 of the value of the variable)
*/

let x = 10;
let y = 20;
let z = 25;

let sum = x + y;
console.log(sum);
console.log(10 + 20);
console.log(typeof sum);

let sub = y - x;
console.log(sub);
console.log(20 - 10);
console.log(typeof sub);

let mul = x * y * z;
console.log(mul);
console.log(10 * 20 * 25);
console.log(typeof mul);

let div = y / x;
console.log(div);
console.log(20 / 10);
console.log(typeof div);

let mod = z / x;
console.log(mod);
console.log(25 / 10);
console.log(typeof mod);

x++;
console.log(x++);
console.log(typeof x);

y--;
console.log(y--);
console.log(typeof y--);



//comparison operations
/*
    ==  equals to (only by value)
    === equals to (by value and by type)
    != not equal to (only by value)
    !== not equal (by value and by type)
    >   greater than
    >=  greater or equal to
    <   smaller than 
    <=  smaller or equal to

*/

console.log('does x equals to z', x == z);
console.log('does x equals to z', x === z);
console.log('does y equals to x', y != x );
console.log('does x equals to y', x !== y);
console.log('is x greater than y', x > y);
console.log('is x grater or equal to y', x >= y);
console.log('is y smaller than z', y < z);
console.log('is x smaller or equal to y', x <= y);


// logical operators
/*
    ||  or 
    &&  and 
    !   not
*/

console.log(x);
console.log(y);
console.log(x < 10 && y > 1);
console.log(x < 10 || y > 1);

console.log(!(x < 10 && y > 1)); 
console.log(!(x < 10 || y > 1));

// try out the different types of loggins in the console;


/*
console.error('The user is not logged in!'); //outputs an error message
console.table(['apples', 'oranges', 'bananas']); //displays data as a table
console.log(['apples', 'oranges', 'bananas'])
let person = { name: 'Dimitar', year: 2021 };
console.dir(person);
console.dir(location); //displays interactive list of the propertios of the specifies
console.log(location);
console.info('Semos course: JavaScript basics.');
console.time('script');
setTimeout(() => {
   console.timeEnd('script'); 
}, 5000);
*/

console.error('This user is not logged in!');
console.table(['bed', 'table', 'chair']);
console.log(['phone', 'computer', 'smart watch' ]);
let person = {name: 'Dimitar', year: 2021};
console.dir(person);
console.dir(location);
console.log(location);
console.info('Semos course: JavaScript basics homework.');
console.time('script');
setTimeout(() => {
    console.timeEnd('script');
}, 2000);

//try out and find out new types of loggings in the console;


