let container = document.querySelector('.container');

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
    myLibrary.push(new Book(title, author, pages, haveRead));
};

function $(type, classStr) {
    let ele = document.createElement(type);
    ele.className = classStr;
    return ele;
};

let myLibrary = [new Book('The Hobbit', 'J.R.R. Tolkien', 295, true), new Book('1', '2', '3', false)];

myLibrary.forEach(book => {
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
});
