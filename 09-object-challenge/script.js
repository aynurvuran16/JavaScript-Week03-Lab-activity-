// Step 1

let library = [
    {
        title: "Book1",
        author: "Author1",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Book2",
        author: "Author2",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Book3",
        author: "Author3",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;



// Step 3

let { title: firstBook } = library[0];
console.log(firstBook); // Output: "Book1"


// Step 4

let libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
