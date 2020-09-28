import { observable, computed, action } from "mobx";
import BookApi from "../api/BookApi";
import BookApiModel from "../api/model/BookApiModel";

class BookStore {
  constructor() {
    this.bookApi = new BookApi();
  }

  @observable books = [];
  @observable book = null;
  @observable errorMessage = null;

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
  async bookCreate(bookApiModel, imgFile) {
    const newBook = new BookApiModel(bookApiModel);

    if (imgFile) {
      const imageInfo = await this.bookApi.bookImageUpload(imgFile);
      if (imageInfo === null) this.errorMessage = "IMAGE UPLOAD ERROR";
      newBook.imgUrl = imageInfo.fileUploadUri;
    }
    const result = await this.bookApi.bookCreate(newBook);
    if (result !== 200) this.errorMessage = "CREATE ERROR";

    alert(this.errorMessage || "도서가 등록되었습니다.");
    window.location.reload();
  }

  @action
  async bookUpdate(bookApiModel, imgFile) {
    const updateBook = new BookApiModel(bookApiModel);

    if (imgFile) {
      const imageInfo = await this.bookApi.bookImageUpload(imgFile);
      if (imageInfo === null) this.errorMessage = "IMAGE UPLOAD ERROR";
      updateBook.imgUrl = imageInfo.fileUploadUri;
    }

    const result = this.bookApi.bookModify(updateBook);
    if (result !== 200) this.errorMessage = "UPDATE ERROR";

    alert(this.errorMessage || "도서가 수정되었습니다.");
    window.location.reload();
  }

  @action
  async bookDelete(ISBN) {
    const result = await this.bookApi.bookDelete(ISBN);
    console.log(result);
    if (result !== 200) this.errorMessage = `${ISBN} DELETE ERROR`;

    alert(this.errorMessage || "도서가 삭제되었습니다.");
    window.location.reload();
  }
}

export default new BookStore();
