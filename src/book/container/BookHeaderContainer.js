import React, { Component } from "react";
import BookHeaderView from "../view/BookHeaderView";
import BookModalFormView from "../view/BookModalFormView";
import { inject, observer } from "mobx-react";

@inject("bookStore")
@observer
class BookHeaderContainer extends Component {
  //도서 추가하기
  addBook = (e, data) => {
    e.preventDefault();
    const { bookStore } = this.props;
    const newbook = { ...data };
    const file = newbook.file;
    bookStore.bookCreate(newbook, file);
    this.setState({
      open: false,
    });
  };

  addModal = () => {
    return (
      <BookModalFormView
        book={{}}
        submitEvent={this.addBook}
        submitButton={{ color: "orange", name: "add book" }}
      />
    );
  };

  render() {
    return <BookHeaderView bookAddModal={this.addModal()} />;
  }
}

export default BookHeaderContainer;
