import React, { Component } from "react";
import { Button, Form, Image, Modal } from "semantic-ui-react";

class BookModalFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      file: null,
      imgUrl: this.props.book.imgUrl || null,
      isbn: this.props.book.isbn || "",
      title: this.props.book.title || "",
      author: this.props.book.author || "",
      publisher: this.props.book.publisher || "",
      price: this.props.book.price || "",
      introduce: this.props.book.introduce || "",
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.book !== prevProps.book) {
      this.setState({
        imgUrl: this.props.book.imgUrl || null,
        isbn: this.props.book.isbn || "",
        title: this.props.book.title || "",
        author: this.props.book.author || "",
        publisher: this.props.book.publisher || "",
        price: this.props.book.price || "",
        introduce: this.props.book.introduce || "",
      });
    }
  }

  onChangeOpen = (value) => this.setState({ open: value });
  onChangeIsbn = (e) => this.setState({ isbn: e.target.value });
  onChangeTitle = (e) => this.setState({ title: e.target.value });
  onChangeAuthor = (e) => this.setState({ author: e.target.value });
  onChangePublisher = (e) => this.setState({ publisher: e.target.value });
  onChangePrice = (e) => this.setState({ price: e.target.value });
  onChangeIntroduce = (e) => this.setState({ introduce: e.target.value });

  // 파일업로드시 미리보기 기능
  handleFileOnChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imgUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { submitEvent, submitButton } = this.props;

    return (
      <Modal
        onClose={() => this.onChangeOpen(false)}
        onOpen={() => this.onChangeOpen(true)}
        open={this.state.open}
        trigger={
          <Button color={`${submitButton.color}`}>{submitButton.name}</Button>
        }
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <div>
            <Image
              style={{ height: "250px", width: "250px" }}
              className="profile_preview"
              src={this.state.imgUrl || "/images/noImage.png"}
            />
            <input
              style={{ marginTop: "5px" }}
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="profile_img"
              onChange={this.handleFileOnChange}
            />
          </div>
          <Modal.Description>
            <Form onSubmit={(e) => submitEvent(e, { ...this.state })}>
              <Form.Group>
                <Form.Input
                  label="ISBN"
                  placeholder="ISBN"
                  onChange={this.onChangeIsbn}
                  width={6}
                  value={this.state.isbn}
                />
                <Form.Input
                  label="Title"
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                  width={10}
                  value={this.state.title}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  label="Author"
                  placeholder="Author"
                  onChange={this.onChangeAuthor}
                  width={4}
                  value={this.state.author}
                />
                <Form.Input
                  label="Publisher"
                  placeholder="Publisher"
                  onChange={this.onChangePublisher}
                  width={6}
                  value={this.state.publisher}
                />
                <Form.Input
                  label="Price"
                  placeholder="Price"
                  onChange={this.onChangePrice}
                  width={6}
                  value={this.state.price}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  label="Introduce"
                  placeholder="Introduce"
                  onChange={this.onChangeIntroduce}
                  width={16}
                  value={this.state.introduce}
                />
              </Form.Group>
              <Button color={submitButton.color} type="submit">
                {submitButton.name}
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => this.onChangeOpen(false)}>
            돌아가기
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default BookModalFormView;
