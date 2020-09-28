import axios from "axios";

class BookApi {
  // BookApi Url 리스트
  // GET    /api/books/
  // GET    /api/books/{ISBN}/
  // POST   /api/books/
  // PUT    /api/books/
  // DELETE /api/books/{ISBN}/

  //공통 적으로 사용되는 URL
  URL = "/api/books/";

  bookList() {
    return axios.get(this.URL).then((response) => {
      if (Object.keys(response.data).includes("message")) return [];
      return response.data;
    });
  }

  bookDetail(ISBN) {
    return axios
      .get(this.URL + `${ISBN}/`)
      .then((response) => (response && response.data) || null);
  }

  bookImageUpload(imgFile) {
    let formData = new FormData();
    formData.append("file", imgFile);

    return axios
      .post("/api/uploadFile/", formData)
      .then((response) => (response && response.data) || null);
  }

  bookCreate(bookApiModel) {
    return axios
      .post(this.URL, bookApiModel)
      .then((response) => (response && response.data) || null);
  }

  bookModify(bookApiModel) {
    return axios
      .put(this.URL, bookApiModel)
      .then((response) => (response && response.data) || null);
  }

  bookDelete(ISBN) {
    return axios
      .delete(this.URL + `${ISBN}`)
      .then((response) => (response && response.data) || null);
  }
}

export default BookApi;
