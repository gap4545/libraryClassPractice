let container = document.querySelector('.container');
let head = document.querySelector('.header');
let footer = document.querySelector('.footer');

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};

Object.defineProperties(Book, {
    'info': {
        enumerable: false,
        value: function() {
            return `${title} by ${author}, ${pages} pages, ${haveRead ? 'have read' : 'not yet read'}`;
        }
    }
});

function addBookToLibrary(title, author, pages, haveRead) {
    let book = new Book(title, author, pages, haveRead);
    let bookContainer = $('div', 'book');
    let haveReadButton = $('button', 'have-read-button');

    for (let [key, value] of Object.entries(book)) {
        let bookHeader = $('h4', 'book-header');
        let bookContent = $('div', 'book-content');
        if (key == 'haveRead') break;

        bookHeader.textContent = key.toUpperCase();
        bookContent.textContent = value;

        bookContainer.appendChild(bookHeader);
        bookContainer.appendChild(bookContent);
    };

    if (book.haveRead) {
        haveReadButton.textContent = 'Have Read';
        haveReadButton.classList.add('have-read');
    } else {
        haveReadButton.textContent = 'Have Not Read';
        haveReadButton.classList.add('have-not-read');
    };
    bookContainer.appendChild(haveReadButton);
    container.appendChild(bookContainer);
};

function $(type, classStr) {
    let ele = document.createElement(type);
    ele.className = classStr;
    return ele;
};

let myLibrary = [new Book('The Hobbit', 'J.R.R. Tolkien', 295, true), new Book('1', '2', '3', false)];

// myLibrary.forEach(book => {
//     let bookContainer = $('div', 'book');
//     let haveReadButton = $('button', 'have-read-button');

//     for (let [key, value] of Object.entries(book)) {
//         let bookHeader = $('h4', 'book-header');
//         let bookContent = $('div', 'book-content');
//         if (key == 'haveRead') break;

//         bookHeader.textContent = key.toUpperCase();
//         bookContent.textContent = value;

//         bookContainer.appendChild(bookHeader);
//         bookContainer.appendChild(bookContent);
//     };

//     if (book.haveRead) {
//         haveReadButton.textContent = 'Have Read';
//         haveReadButton.classList.add('have-read');
//     } else {
//         haveReadButton.textContent = 'Have Not Read';
//         haveReadButton.classList.add('have-not-read');
//     };
//     bookContainer.appendChild(haveReadButton);
//     container.appendChild(bookContainer);
// });


let addBookButton = $('button', 'add-book-button');
addBookButton.textContent = 'Add New Book';
addBookButton.onclick = function() {
    let formContainer = $('form', 'new-book-form');
    formContainer.setAttribute('method', 'post');

    let inputTitle = $('input', 'form-data-entry');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'book-title');
    inputTitle.setAttribute('id', 'book-title');
    inputTitle.setAttribute('placeholder', 'Book Title');
    formContainer.appendChild(inputTitle);

    let inputAuthor = $('input', 'form-data-entry');
    inputAuthor.setAttribute('type', 'text');
    inputAuthor.setAttribute('name', 'book-author');
    inputAuthor.setAttribute('id', 'book-author');
    inputAuthor.setAttribute('placeholder', 'Book Author');
    formContainer.appendChild(inputAuthor);

    let inputPages = $('input', 'form-data-entry');
    inputPages.setAttribute('type', 'number');
    inputPages.setAttribute('name', 'book-pages');
    inputPages.setAttribute('id', 'book-pages');
    inputPages.setAttribute('placeholder', 'Number of Pages');
    formContainer.appendChild(inputPages);

    let inputRead = $('input', 'form-data-entry');
    inputRead.setAttribute('type', 'checkbox');
    inputRead.setAttribute('name', 'book-have-read');
    inputRead.setAttribute('id', 'book-have-read');
    formContainer.appendChild(inputRead);

    let submitButton = $('button', 'submit-button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit'
    formContainer.appendChild(submitButton);

    formContainer.addEventListener('submit', e => {
        let title = formContainer.elements['book-title'].value;
        let author = formContainer.elements['book-author'].value;
        let pages = formContainer.elements['book-pages'].value;
        let haveRead = formContainer.elements['book-have-read'].value;
        addBookToLibrary(title, author, pages, haveRead);
    })
    container.appendChild(formContainer);
};
container.appendChild(addBookButton);
