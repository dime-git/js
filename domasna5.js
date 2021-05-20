// Homework 05 
    
    //1. Loop through the arrays and print the elements.

    let fruits = ['Apple', 'Banana', 'Orange'];
    let students = [
        {
            firstName: 'John',
            lastName: 'Doe',
            index: 20201
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            index: 20202
        },
        {
            firstName: 'David',
            lastName: 'Vinoth',
            index: 20203
        },
        {
            firstName: 'Divya',
            lastName: 'Ishitha',
            index: 20204
        },
        {
            firstName: 'Thomas',
            lastName: 'Edgardson',
            index: 20205
        }
    ];
     
    for(let counter = 0; counter < fruits.length; counter++) {
        console.log('counter =', counter);
        console.log(`fruits[${counter}] = `, fruits[counter]);
    };

    //2. Loop through the students array and print the details of the students.

    for(let counter = 0; counter < students.length; counter++) {
        console.log('counter =', counter);
        console.log(`students[${counter}] = `, students[counter]);
    };

    //3. Create a loop and print the first 10 numbers.

    let numbers = [ 2, 4, 6, 8, 15, 17, 19, 23, 35, 46, 58, 69, 72, 94, 100];

    for(let counter = 0; counter <= 10; counter++) {
        console.log('counter = ', counter);
        console.log(`numbers[${counter}] = `, numbers[counter]);
    };

    //4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).

    let num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    for(let counter = 0; counter <= 10; counter++) {
        console.log('counter = ', counter);
        console.log(`num[${counter}] = `, num[counter]);
    };

    //a. starting from 0 && using a conditional statement (increase the counter for 1)
    //5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).

    let num1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    for(let counter = 0; counter <= 10; counter++) {
        console.log('counter = ', counter);
        console.log(`num1[${counter}] = `, num1[counter])
    };


    //a. starting from 0 && using a conditional statement (increase the counter for 1)
