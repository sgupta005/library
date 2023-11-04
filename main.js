const myLibrary = [{
    title: 'The Vinci Code', 
    author: 'Robert Langdon', 
    pages: 400}, 
    {
        title: 'The Vinci Code', 
        author: 'Robert Langdon', 
        pages: 400},
];
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const showFormButton = document.getElementById('show-form-button');
const bookFormDialog = document.getElementById('book-form-dialog');
const bookFormContainer = document.getElementById('book-form-container');
const bookForm = document.getElementById('add-book-form');
const bookGridContainer = document.getElementById('book-grid-container');
const submitButton = document.getElementById('form-submit-button');
const closeButton = document.getElementById('form-cancel-button');

showFormButton.addEventListener('click', ()=>{
    bookFormDialog.showModal();
});

document.addEventListener('click', hideBox);
function hideBox(event){
if ((!bookFormContainer.contains(event.target) && !showFormButton.contains(event.target)) || closeButton.contains(event.target)){
    bookFormDialog.close();
}}

bookForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = parseInt(document.getElementById('book-pages').value);
    const read = document.getElementById('book-read').value;

    const book = new Book(title,author,pages,read);
    myLibrary.push(book);

    bookCard = createBookCard(book);
    bookGridContainer.appendChild(bookCard);
    console.log(myLibrary);
    bookForm.reset();
    bookFormDialog.close();
})

//only for creating dummy text
for (let book of myLibrary){
    bookCard = createBookCard(book);
    bookGridContainer.appendChild(bookCard);
    
}
function createBookCard(book){
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    title.textContent = `"${book.title}"`;
    author.textContent = `By: ${book.author}`;
    pages.textContent = book.pages;
    readButton = createReadButton(book);
    bookCard.append(title,author,pages,readButton);
    return bookCard;
}
function createReadButton(book){
    readButton = document.createElement('button');
    readButton.classList.add('read-button');
    if (book.read == 'on'){
        readButton.textContent = 'Read';
        readButton.classList.add('on');
    }else{
        readButton.textContent = 'Not Read';
    }
    return readButton;
}

