import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";

class BookDetailsView extends Component {
  render() {
    const { book, modifyModal } = this.props;

    return (
      <Card>
        <Image src={book.imgUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{book.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              {book.author} &nbsp; {book.publisher}
            </span>
            <br></br>
            <span className="date">{book.price}</span>
          </Card.Meta>
          <Card.Description>{book.introduce}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {modifyModal}
          <Button color="black">삭제</Button>
        </Card.Content>
      </Card>
    );
  }
}

export default BookDetailsView;
