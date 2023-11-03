const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookButton = document.getElementById('add-book-button');
const bookForm = document.getElementById('book-form');
const addBookForm = document.getElementById('add-book-form');
const bookGridContainer = document.getElementById('book-grid-container');

addBookButton.addEventListener('click', ()=>{
    addBookButton.disabled = true;
    bookForm.style.display = 'flex';
})

addBookForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = parseInt(document.getElementById('book-pages').value);
    const read = document.getElementById('book-read').value;

    const book = new Book(title,author,pages,read);
    myLibrary.push(book);
    bookCard = createBookCard(book);
    bookGridContainer.appendChild(bookCard);
    console.log(myLibrary);
    addBookForm.reset();
    bookForm.style.display = 'none';
    addBookButton.disabled = false;
})

function createBookCard(book){
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    bookCard.append(title,author,pages);
    return bookCard;
}

document.addEventListener('click', hideBox);
function hideBox(event){
    if (!bookForm.contains(event.target) && !addBookButton.contains(event.target)){
        bookForm.style.display = 'none';
        addBookButton.disabled = false;
    }
}

