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

function addBookToLibrary(e) {

    // Adding the book to the library
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookStatus.value);
    myLibrary.push(newBook);

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
        newRow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button type="button" class="read">${book.read}</button></td>
        <td><button type="button" class="remove">Remove</button></td>
        `
        tableBody.appendChild(newRow);
    }

    const removeButtons = document.querySelectorAll("tbody button.remove");
    removeButtons.forEach(button => button.addEventListener('click', removeBook));

}

function removeBook(e) {
    
    myLibrary = myLibrary.filter(book => book.title !== this.parentElement.parentElement.firstElementChild.textContent);

    displayBooks();
}

const removeButtons = document.querySelectorAll("tbody button.remove");
removeButtons.forEach(button => button.addEventListener('click', removeBook));








