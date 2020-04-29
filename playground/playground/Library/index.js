// import comp100D from './comp100D.js'


// const library = ['apples', 'pears', 'bananas', 'kiwi', 'watermelon']
const library = [
    {'title': 'Tom Sawyer', 'popularity': 0, 'available': false, 'id': 0},
    {'title': 'Vanity Fair', 'popularity': 0, 'available': true, 'id': 1},
    {'title': 'Illidan', 'popularity': 0, 'available': true, 'id': 2},
    {'title': 'The Hobbit', 'popularity': 0, 'available': true, 'id': 3},
    {'title': 'The big red Dog', 'popularity': 0, 'available': true, 'id': 4},
]

function createBookCard (book) {
    let element = document.createElement("div")
    element.classList.add('card')

    let firstLine = document.createElement("h1")
    firstLine.textContent = book.title
    element.appendChild (firstLine)

    let secondLine = document.createElement("p")
    secondLine.textContent = "Read " + book.popularity + " times"
    element.appendChild (secondLine)

    let thirdLine = document.createElement("p")
    thirdLine.textContent = book.available ? "Available" : "Not available"
    element.appendChild (thirdLine)

    let button1 = document.createElement("button")
    let button1Text = document.createTextNode(
        book.available ? "Borrow" : "Return"    
    )
    button1.appendChild(button1Text)
    element.appendChild (button1)

    return element
}


for (const book of library) {
    const bookCard = createBookCard(book)
    content.appendChild ( bookCard )
}



// const myLibrary = library()

// const myBook = book('Tom Sawyer')

// myLibrary.addBook (myBook)
// myLibrary.removeBook ( ??? )

// myLibrary.borrow ( ??? )
// myLibrary.return ( ??? )

// myLibrary.find ( ??? )