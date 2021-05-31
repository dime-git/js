// 1. Write functions to calculate the perimeter and the area of a rectangle

let area = (x = 0, y = 0) => {
    let p = x * y;
    return p;
};

let area_rectangle = area (4, 5);
console.log('P =', area_rectangle);

let perimeter = (a = 0, b = 0) => {
    let1 = 2 * (a + b);
    return 1 ;
};

let perimeter_rectangle = perimeter (7, 8);
console.log('L =', perimeter_rectangle);

//  2. Write functions to calculate the perimeter and the area of a circle

let area_c = (r = 0, pi = 0) => {
    let p_c = pi * r * r;
    return p_c;
};

let area_circle = area_c (4, 3.14);
console.log('P =', area_circle);

let perimeter_c = (r = 0, pi = 0) => {
    let l_c = 4 * pi * r;
    return l_c;
};

let perimeter_circle = perimeter_c (2, 3.14);
console.log('L = ', perimeter_circle);

/* 3. Write a function that compares two numbers. The function should return the bigger number. Wait for the function to return the result. 
If some of the parameters is not a number, reject the call and return appropriate error. Print the result. */

let = compare_numbers = (a = 0, b = 'a') => {
    let compare_numbers = (a = 0, b = 'a') => {
        return new Promise ((resolve, reject) => {
            if (a > b) {
                const bigger = 'a is bigger number';
                resolve (bigger);
            } else {
                const mistake = 'error'
                reject (mistake);
            }
    });
}; 

let com_num = comapre_numbers(4, 'c');
console.log(com_num); 
}; // ne pecati vo console, ima greska

/* 4.  Write a function that compares range of a given number. The function should return whether the number is smaller or bigger than 25. 
Wait for the function to return the result. If the number is smaller than 25, reject the call and return appropriate error. Print the result. */

let compare_range = (s = 0) => {
    return new Promise ((resolve, reject) => {
        if (1 < s && s < 25) {
            return resolve ('bigger');
        } else {
            return reject ('smaller');
        }
    });
};

let wait_for_response = async () => {
    try{
        console.log('try');
        let response = await compare_range ();
        console.log('response', response);
    } catch (error) {
        console.log('catch');
        console.log(error);
    }
};

let compare = compare_range (13);
console.log(compare);