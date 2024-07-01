let bookArray = [
  "자바스크립트 완벽하게 이해하기",
  32000,
  "훈이",
  "자바스크립트짱짱",
];

class Book {
  constructor(title, price, author, publisher) {
    (this.title = title),
    (this.price = price),
    (this.author = author),
    (this.publisher = publisher);
  }
}

Book.prototype.published_date = 20201220;

let book = new Book(...bookArray);
let book_ = new Book(bookArray);
console.log(book)
console.log(book_)

for (key in book) {
  console.log(`key : ${key} / value : ${book[key]}`);
}