function library (name, startingValue) {

    const LibraryName = name
    let counter = startingValue
    
    return {
        addBook: function () {
            counter ++ 
            console.log('addBook', LibraryName, counter)
        },
        removeBook: function () {
            counter ++ 
            console.log('removeBook', LibraryName, counter)
        },
        findBook: function () {
            counter ++ 
            console.log('findBook', LibraryName, counter)
        },
    }

}



const myLibrary = library('Library 1', 1000)

myLibrary.addBook()
myLibrary.removeBook()
myLibrary.findBook()

const l2 = library('Library 2', 2000)

l2.addBook()
l2.removeBook()
l2.findBook()



function book (title, id) {

    const bookTitle = title
    const bookId = id
    let bookPopularity = 0
    let bookAvailable = true
    
    return {

      get title() { return bookTitle },
      get id() { return bookId },

      get popularity() { return bookPopularity },
      get available() { return bookAvailable },

      borrow: function () {
        if (bookAvailable) {
          bookPopularity ++
          bookAvailable = false
        }
      },

      giveBack: function () {
        if (! bookAvailable) {
          bookAvailable = true
        }
      }

    }

}

const myBook = book ('Tom Sawyer', 1)
console.log(myBook.title)
console.log(myBook.id)
console.log('Popularity', myBook.popularity)
console.log('Available', myBook.available)

myBook.borrow()
console.log('Popularity', myBook.popularity)
console.log('Available', myBook.available)

myBook.giveBack()
console.log('Popularity', myBook.popularity)
console.log('Available', myBook.available)

myBook.borrow()
console.log('Popularity', myBook.popularity)
console.log('Available', myBook.available)

myBook.borrow()
console.log('Popularity', myBook.popularity)
console.log('Available', myBook.available)