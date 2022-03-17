let myLibrary = [new Book('The Hobbit', 'J.R.R. Tolkien', 295, true)];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${haveRead ? 'have read' : 'not yet read'}`;
    };
};

function addBookToLibrary() {
    myLibrary.push(new Book(document.querySelector('#title'), document.querySelector('#author'), document.querySelector('#pages'), document.querySelector('#pages')));
}
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
// console.log(hobbit.info())

// myLibrary.forEach(book => {
//     let div = document.createElement('div');
//     div.className = 'book';
    
// })

Object.keys(hobbit).forEach(a => {
    console.log(a);
});