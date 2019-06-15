let books = [
    { name: "Jungle Book", genre: "story", id: "1" },
    { name: "Iron Man", genre: "Sci-Fi", id: "2" },
    { name: "Dominos", genre: "food-store", id: "3" },
    { name: "2012 Movie", genre: "Sci-Fi", id: "4" }
];

console.log(books.filter(book => book.id !== "3"));