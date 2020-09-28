import React, { Component } from "react";
import { Divider, Header } from "semantic-ui-react";

const headerStyle = {
  paddingTop: "20px",
  paddingBottom: "20px",
};

class BookHeaderView extends Component {
  render() {
    const { bookAddModal } = this.props;

    return (
      <>
        <Header style={headerStyle} as="h1" dividing>
          Books Manage Page
        </Header>
        {bookAddModal}
        <Divider />
      </>
    );
  }
}

export default BookHeaderView;
