/*1. Create an array of objects (objects to represent book details). 
For each book create a paragraph that will contain information about the title of the book and the author. 
Add those elements to the page. 
Use ul and li to display the book details. */ 

let bookA = {
    name: 'The Great Gatsby',
    author: 'Francis Scott Key Fitzgerald',
    genre: 'Tradegy',
    published: 1925  
}; 


let bookB = {
    name:'War and Peace',
    author: 'Leo Tolstoy',
    genre: 'Novel, Historical Fiction, Romance novel, historical novel, Saga, Philosophical fiction, War story',
    published : 1867
}; 

let bookC = {
    name:'Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    genre: 'Picaresque novel',
    published: 1884
}; 

//2. Change the style of the book, depending on whether you have read the book. (hint: use loops) */








let books = [bookA, bookB, bookC];


console.log('books', books);
console.log('books name', `${books[1].name}` );
console.log('books author', `${books[0].author}` );
console.log('books genre',  `${books[2].genre}`);
console.log('book published', `${books[1].published}`); 

// 1. Set the following body style - font-family to 'Arial, sans-serif'.
// 2. Fill in the values ​​in the span tags.


let element = document.getElementById('firstBook');
element.innerHTML = ('The Great Gatsby');
console.log(element.innerHTML); 

let elements = document.getElementById('secondBook');
elements.innerHTML = ('War and Peace');
console.log(elements.innerHTML);

let el = document.getElementById('thirdBook');
el.innerHTML = ('Adventures of Hucklberry Finn');
console.log(el.innerHTML);

let n = document.getElementById('nickname');
n.innerHTML = ('Dime');
console.log(n.innerHTML);

let f = document.getElementById('favorites');
f.innerHTML = ('Playing guitar, piano');
console.log(f.innerHTML);

let h = document.getElementById('hometown');
h.innerHTML = ('Kavadarci');
console.log(h.innerHTML);




// 3. Add the listItem class to each li tag. (hint: use loops)
//All elements with the listItem class should have white font color, red background color, and font size 14.