let myLibrary = [{
    title: 'The Vinci Code', 
    author: 'Robert Langdon', 
    pages: 400,
    read: true,},
    {
    title: 'The Vinci Code', 
    author: 'Robert Langdon', 
    pages: 400
},];

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
    const read = document.getElementById('book-read').checked;
    
    const book = new Book(title,author,pages,read);
    myLibrary.push(book);

    bookCard = createBookCard(book);
    bookGridContainer.appendChild(bookCard);

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
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    bookCard.classList.add('book-card');

    title.textContent = `"${book.title}"`;
    author.textContent = `By: ${book.author}`;
    pages.textContent = book.pages;

    readButton = createReadButton(book);
    removeButton = createRemoveButton(book);
    
    bookCard.append(title,author,pages,readButton, removeButton);
    return bookCard;
}

function handleBookAction(event, book, action){
    if (action === 'read'){
        if (book.read){
            book.read = false;
            event.target.textContent = 'Not Read';
            event.target.classList.remove('on');
            console.log(event);
        }else{
            book.read = true;
            event.target.textContent = 'Read';
            event.target.classList.add('on');
            console.log(event);
        }
    }else if(action === 'remove'){
        bookGridContainer.removeChild(bookCard);
        myLibrary = myLibrary.filter((item)=> item!==book);
        console.log(myLibrary);
    }
}

function createReadButton(book){
    readButton = document.createElement('button');
    readButton.classList.add('read-button');
    if (book.read){
        readButton.textContent = 'Read';
        readButton.classList.add('on');
    }else{
        readButton.textContent = 'Not Read';
    }
    readButton.addEventListener('click', (event)=>handleBookAction(event,book,'read'));
    return readButton;
}

function createRemoveButton(book){
    removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', (event)=>handleBookAction(event,book,'remove'));
    return removeButton
}
