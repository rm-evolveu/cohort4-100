// const library = [
//     {'title': 'Tom Sawyer', 'popularity': 0, 'available': false, 'id': 0},
//     {'title': 'Vanity Fair', 'popularity': 0, 'available': true, 'id': 1},
//     {'title': 'Illidan', 'popularity': 0, 'available': true, 'id': 2},
//     {'title': 'The Hobbit', 'popularity': 0, 'available': true, 'id': 3},
//     {'title': 'The big red Dog', 'popularity': 0, 'available': true, 'id': 4},
// ]


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

