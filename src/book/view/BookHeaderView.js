import React, { Component } from "react";
import { Header, Divider } from "semantic-ui-react";
import BookAddModal from "./BookAddModal";

const headerStyle = {
  paddingTop: "20px",
  paddingBottom: "20px",
};

class BookHeaderView extends Component {
  render() {
    return (
      <Header style={headerStyle} as="h1" dividing>
        Books Manage Page
        {/* <BookAddModal /> */}
      </Header>
    );
  }
}

export default BookHeaderView;
