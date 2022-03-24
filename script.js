let container = document.querySelector('.container');
let bookDisplayContainer = document.querySelector('.book-display-container');
let head = document.querySelector('.header');
let footer = document.querySelector('.footer');
let myLibrary = [new Book('The Hobbit', 'J.R.R. Tolkien', 295, true), new Book('1', '2', '3', false)];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};

function bookInfo(book) {
    return [book.title, book.author, book.pages, book.haveRead];
};

function cookieSet() {
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    let expires = 'expires=' + d.toUTCString();
    
}


function displayBook(book) {
    let bookContainer = $('div', 'book');
    let haveReadButton = $('button', 'have-read-button');
    let deleteBookButton = $('button', 'delete-book-button');

    for (let [key, value] of Object.entries(book)) {
        let bookHeader = $('h4', 'book-header');
        let bookContent = $('div', 'book-content');
        if (key == 'haveRead') break;
        if (value == '') value = 'Unknown';

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
    haveReadButton.onclick = function() {
        if (haveReadButton.className.includes('not')) {
            haveReadButton.classList.remove('have-not-read');
            haveReadButton.classList.add('have-read');
            haveReadButton.textContent = 'Have Read';
            book.haveRead = true;
        } else {
            haveReadButton.classList.remove('have-read');
            haveReadButton.classList.add('have-not-read');
            haveReadButton.textContent = 'Have Not Red';
            book.haveRead = false;
        };
    };
    bookContainer.appendChild(haveReadButton);

    deleteBookButton.textContent = 'X';
    deleteBookButton.onclick = function() {
        bookContainer.classList.add('shrink-animate');
        bookContainer.addEventListener('animationend', e => {
            bookDisplayContainer.removeChild(bookContainer);
        });
    };
    bookContainer.appendChild(deleteBookButton);

    bookContainer.classList.add('expand-animate');
    bookContainer.addEventListener('animationend', e => {
        bookContainer.classList.remove('expand-animate');
    });
    bookDisplayContainer.appendChild(bookContainer);
};

function addBookToLibrary(title, author, pages, haveRead) {
    let book = new Book(title, author, pages, haveRead);
    myLibrary.push(book);
    displayBook(book);
};

function $(type, classStr) {
    let ele = document.createElement(type);
    ele.className = classStr;
    return ele;
};


myLibrary.forEach(book => displayBook(book));

let addBookButton = $('button', 'add-book-button');
addBookButton.textContent = 'Add New Book';
addBookButton.onclick = function() {
    let divFormContainer = $('div', 'form-container');
    let formContainer = $('form', 'new-book-form');
    formContainer.setAttribute('method', 'post');

    let inputTitle = $('input', 'form-data-entry');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'book-title');
    inputTitle.setAttribute('id', 'book-title');
    inputTitle.setAttribute('placeholder', 'Book Title');
    inputTitle.setAttribute('required', 'true');
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
    submitButton.textContent = 'Add Book'
    formContainer.appendChild(submitButton);

    formContainer.addEventListener('submit', e => {
        e.preventDefault();
        formContainer.classList.add('shrink-animate');
        formContainer.addEventListener('animationend', e=> {
            container.removeChild(divFormContainer);
        });
        addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
    });

    formContainer.classList.add('expand-animate');
    formContainer.addEventListener('animationend', e => {
        formContainer.classList.remove('expand-animate');
    });

    let deleteBookButton = $('button', 'delete-book-button');
    deleteBookButton.setAttribute('type', 'button');
    deleteBookButton.textContent = 'X';
    deleteBookButton.onclick = function() {
        inputTitle.removeAttribute('required');
        formContainer.classList.add('shrink-animate');
        formContainer.addEventListener('animationend', e => {
            // formContainer.classList.remove('shrink-animate');
            container.removeChild(divFormContainer);
        });
    };
    formContainer.appendChild(deleteBookButton);
    divFormContainer.appendChild(formContainer);
    container.appendChild(divFormContainer);
};
container.appendChild(addBookButton);