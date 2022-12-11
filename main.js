let myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    // this.pages = pages;
    this.read = read;
    /*
    this.info = function() {
        return read 
        ? `${title} by ${author}, ${pages} pages, not read yet`
        : `${title} by ${author}, ${pages} pages, read`;
    }
    */
}

const tableBody = document.querySelector('tbody');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookStatus = document.getElementById('book-status');

function checkDuplicate(title, author) {
    let duplicate = false;

    for (book of myLibrary) {
        if (book.title === title && book.author === author) {
            duplicate = true;
            break;
        }
    }

    return duplicate;
}

function onlySpaces(str) {
    return str.trim().length === 0;
  }

function validInput(title, author) {
    return !(onlySpaces(title) || onlySpaces(author));
}

function addBookToLibrary(e) {

    // Adding the book to the library
    if (validInput(bookTitle.value, bookAuthor.value)) {
        if (!checkDuplicate(bookTitle.value, bookAuthor.value)) {
            const newBook = new Book(bookTitle.value.trim(), bookAuthor.value.trim(), bookStatus.value);
            myLibrary.push(newBook);
    
        } else {
            alert('You have listed a book with the same title and author');
        }
    } else {
        alert('Please enter a valid input');
    }

    
    
    // Reset the form
    bookTitle.value = '';
    bookAuthor.value = '';

    // Display book in table
    displayBooks();
    e.preventDefault();
    
}


const addBookButton = document.querySelector(".add-book button");
addBookButton.addEventListener('click', addBookToLibrary);


function displayBooks() {
    tableBody.innerHTML = '';

    for (let book of myLibrary) {
        const newRow = document.createElement('tr');
        if (book.read === 'Read') {
            newRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><button type="button" class="read yes">${book.read}</button></td>
            <td><button type="button" class="remove">Remove</button></td>
            `
        } else  {
            newRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><button type="button" class="read no">${book.read}</button></td>
            <td><button type="button" class="remove">Remove</button></td>
            `
        }
        
        tableBody.appendChild(newRow);
    }

    const removeButtons = document.querySelectorAll("tbody button.remove");
    removeButtons.forEach(button => button.addEventListener('click', removeBook));

    const statusButtons = document.querySelectorAll("tbody button.read");
    statusButtons.forEach(button => button.addEventListener('click', changeStatus));

}

function removeBook(e) {
    
    myLibrary = myLibrary.filter(book => (book.title !== this.parentElement.parentElement.firstElementChild.textContent) ||
                                         (book.author !== this.parentElement.parentElement.getElementsByTagName('td')[1].textContent));

    displayBooks();
}

function changeStatus(e) {

    /* IDK WHY THIS DOESN'T WORK 
    function change(book) {
        if (book.title === this.parentElement.parentElement.firstElementChild.textContent) {
            if (book.read === 'Read') {
                book.read = 'Not read';
            } else {
                book.read = 'Read';
            }
        }

        return book;
    }

    myLibrary = myLibrary.map(change);
    */ 

    for (book of myLibrary) {
        if (book.title === this.parentElement.parentElement.firstElementChild.textContent) {
            if (book.read === 'Read') {
                book.read = 'Not read';
            } else {
                book.read = 'Read';
            }
        }
    }

    displayBooks();
} 












