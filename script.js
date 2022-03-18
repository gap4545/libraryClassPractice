let myLibrary = [new Book('The Hobbit', 'J.R.R. Tolkien', 295, true), new Book('1', '2', '3', true)];
let container = document.querySelector('.container');

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${haveRead ? 'have read' : 'not yet read'}`;
    };
};

function addBookToLibrary(title, author, pages, haveRead) {
    myLibrary.push(new Book(title, author, pages, haveRead));
};

function $(type, classStr) {
    let ele = document.createElement(type);
    ele.className = classStr;
    return ele;
};

myLibrary.forEach(book => {
    let bookContainer = $('div', 'book');
    let bookHeader = $('h3', 'book-header');
    let bookContent = $('div', 'book-content');
    let haveReadButton = $('button', 'have-read');

    bookHeader.textContent = 'Title';
    bookContainer.appendChild(bookHeader);
    bookContent.textContent = book.title;
    bookContainer.appendChild(bookContent);
    bookHeader.textContent = 'Author';
    bookContainer.appendChild(bookHeader);
    bookContent.textContent = book.author;
    bookContainer.appendChild(bookContent);
    bookHeader.textContent = 'Pages';
    bookContainer.appendChild(bookHeader);
    bookContent.textContent = book.author;
    bookContainer.appendChild(bookContent);
    haveReadButton.textContent = ''
})

// const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
// console.log(hobbit.info())

// myLibrary.forEach(book => {
//     let div = document.createElement('div');
//     div.className = 'book';
    
// })
