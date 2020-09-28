import React, { Component } from "react";
import BookHeaderView from "../view/BookHeaderView";
import BookModalFormView from "../view/BookModalFormView";
import { inject, observer } from "mobx-react";

@inject("bookStore")
@observer
class BookHeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      file: null,
      previewURL: null,
      isbn: "",
      title: "",
      author: "",
      publisher: "",
      price: "",
      introduce: "",
    };
  }

  // 파일업로드시 미리보기 기능
  handleFileOnChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  profile_preview_imageUrl = () => {
    const defaultImageUrl = "/images/noImage.png";
    const ImageUrl = this.state.previewURL || defaultImageUrl;
    return ImageUrl;
  };

  setModalOpen = (value) => this.setState({ open: value });
  onChangeIsbn = (e) => this.setState({ isbn: e.target.value });
  onChangeTitle = (e) => this.setState({ title: e.target.value });
  onChangeAuthor = (e) => this.setState({ author: e.target.value });
  onChangePublisher = (e) => this.setState({ publisher: e.target.value });
  onChangePrice = (e) => this.setState({ price: e.target.value });
  onChangeIntroduce = (e) => this.setState({ introduce: e.target.value });

  //도서 추가하기
  addBook = (e) => {
    e.preventDefault();
    const { bookStore } = this.props;
    const newbook = { ...this.state };
    const file = newbook.file;
    bookStore.bookCreate(newbook, file);
    this.setState({
      file: null,
      previewURL: null,
      open: false,
    });
  };

  addModal = () => {
    return (
      <BookModalFormView
        handleFileOnChange={this.handleFileOnChange}
        profile_preview_imageUrl={this.profile_preview_imageUrl()}
        onChangeIsbn={this.onChangeIsbn}
        onChangeTitle={this.onChangeTitle}
        onChangeAuthor={this.onChangeAuthor}
        onChangePublisher={this.onChangePublisher}
        onChangePrice={this.onChangePrice}
        onChangeIntroduce={this.onChangeIntroduce}
        addBook={this.addBook}
        setModalOpen={this.setModalOpen}
        open={this.state.open}
      />
    );
  };

  render() {
    return <BookHeaderView bookAddModal={this.addModal()} />;
  }
}

export default BookHeaderContainer;
