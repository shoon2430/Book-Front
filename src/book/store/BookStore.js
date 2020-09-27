import { observable, computed, action } from "mobx";
import BookApi from "../api/BookApi";
import BookApiModel from "../api/model/BookApiModel";

class BookStore {
  constructor() {
    this.bookApi = new BookApi();
  }

  @observable books = [];
  @observable book = null;
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
    // this.bookDetail(book.isbn);
  };

  @action
  async bookList() {
    const books = await this.bookApi.bookList();

    this.books = books.map((book) => {
      return new BookApiModel(book);
    });
  }

  @action
  async bookDetail(ISBN) {
    const book = await this.bookApi.bookDetail(ISBN);
    this.book = new BookApiModel(book);
  }

  @action
  async bookCreate(bookApiModel) {
    const result = this.bookApi.bookCreate(bookApiModel);
    if (result === null) this.errorMessage = "CREATE ERROR";
  }

  @action
  async bookDelete(ISBN) {
    const result = this.bookApi.bookDelete(ISBN);
    if (result === null) this.errorMessage = `${ISBN} DELETE ERROR`;
  }

  @action
  async bookUpdate(bookApiModel) {
    const result = this.bookApi.bookModify(bookApiModel);
    if (result === null)
      this.errorMessage = `${bookApiModel.ISBN} UPDATE ERROR`;
  }

  @action
  async search(searchType, keyword) {
    this.books = await this.bookApi.search(searchType, keyword);
  }
}

export default new BookStore();
