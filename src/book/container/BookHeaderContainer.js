import React, { Component } from "react";
import BookHeaderView from "../view/BookHeaderView";
import { inject, observer } from "mobx-react";

@inject("bookStore")
@observer
class BookHeaderContainer extends Component {
  //도서 추가하기
  addBook = () => {
    console.log("도서를 추가합니다");
  };

  render() {
    return <BookHeaderView />;
  }
}

export default BookHeaderContainer;
