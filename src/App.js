import React from "react";
import { Container } from "semantic-ui-react";
import BookMain from "./book/view/menu/BookMain";
import { Provider } from "mobx-react";
import bookStore from "./book/store/BookStore";

function App() {
  return (
    <Provider bookStore={bookStore}>
      <Container>
        <BookMain />
      </Container>
    </Provider>
  );
}

export default App;
