import { observable, computed, action } from "mobx";
import booksData from "../data/Books";

class BookStore {
  @observable books = booksData;
  @observable book = booksData[0];
  @observable errorMessage = "";

  @computed get _book() {
    return this.book ? { ...this.book } : {};
  }

  @computed get _books() {
    return this.books ? this.books.slice() : [];
  }

  @computed get getErrorMessage() {
    return this.errorMessage ? this.errorMessage : "FAIL";
  }

  @action select = (book) => {
    this.book = book;
  };
}

export default new BookStore();
