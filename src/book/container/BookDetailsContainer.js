import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import BookDetailsView from "../view/BookDetailsView";
import BookModalFormView from "../view/BookModalFormView";

@inject("bookStore")
@observer
class BookDetailsContainer extends Component {
  //도서 내용 수정하기
  modifyBook = (e, data) => {
    e.preventDefault();
    const { bookStore } = this.props;
    const newbook = { ...data };

    const file = newbook.file;
    bookStore.bookUpdate(newbook, file);
    this.setState({
      open: false,
    });
  };

  modifyModal = () => {
    return (
      <BookModalFormView
        book={this.props.bookStore._book}
        submitEvent={this.modifyBook}
        submitButton={{ color: "violet", name: "modify book" }}
      />
    );
  };

  render() {
    const book = this.props.bookStore._book;

    //빈객체 체크
    const BookDetailsComponent =
      Object.keys(book).length === 0 && book.constructor === Object ? (
        <></>
      ) : (
        <BookDetailsView book={book} modifyModal={this.modifyModal()} />
      );

    return BookDetailsComponent;
  }
}

export default BookDetailsContainer;
