document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    const bookList = document.getElementById('book-list');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${title} - ${author} - ${isbn}`));
    
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Remover'));
    li.appendChild(deleteBtn);
    
    bookList.appendChild(li);
    
    deleteBtn.addEventListener('click', function() {
        bookList.removeChild(li);
    });
    
    document.getElementById('book-form').reset();
});
