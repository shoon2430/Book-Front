export default class BookApiModel {
  constructor(book) {
    this.isbn = book.isbn;
    this.title = book.title;
    this.author = book.author;
    this.publisher = book.publisher;
    this.price = book.price;
    this.imgUrl = book.imgUrl;
    this.introduce = book.introduce;
  }
}
