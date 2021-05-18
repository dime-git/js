/*  Homework 04
1. Create three person objects with properties firstName and lastName and add coresponding values.
Print the values of the properties of the objects. Use both approaches. */

let person = {
    firstname: 'Jordan',
    lastname: 'Poole'
};

let person2 = {
    firstname: 'Michael',
    lastname: 'Ammons'
};

let person3 ={
    firstname: 'Donald',
    lastname: 'Cole'
};

console.log(person);
console.log(person2);
console.log(person3);

console.log('First name', person.firstname);
console.log('First name', person2.firstname);
console.log('First name', person3.firstname);

console.log('Last name', person['lastname']);
console.log('Last name', person2['lastname']);
console.log('Last name', person3['lastname']);


/* 2. Add the property age and coresponding value to the objects. Use both approaches. */

let man = [person, person2, person3];
man[0]['age'] = 30;
man[1]['age'] = 27;
man[2]['age'] = 35; 

man[0].age = 30;
man[1].age = 27;
man[2].age = 35;

console.log(man);



//3. Find out which person is older.





//4. Create array people. Populate the array with the three person objects.
 
let mA = {
    firstname: 'John',
    lastname: 'Doe',
    born: 1985
};

let mB = {
    firstname:'Eazy',
    lastname: 'E',
    born: 1964
};

let mans = [mA, mB];

console.log('mans', mans);
console.log('mans born', mans[0].born);
console.log('mans firstname', mans[1].firstname);



//5. Find the sum of the years of the people. (hint: use forEach)






//6. Find the average of the years of the people.






/* 7. Find and understand the documentation about the following methods:
    - pop method removes the last element from an array and returns that element. This method changes the length of the array.
    - push method adds one or more elements to the end of an array and returns the new length of the array. 
    - map  method creates a new array populated with the results of calling a provided function on every element in the calling array.
    - filter method creates a new array with all elements that pass the test implemented by the provided function.
    - sort method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
*/ 