import React from "react";
import { Grid, Container } from "semantic-ui-react";
import BookListContainer from "../../container/BookListContainer";
import BookDetailsContainer from "../../container/BookDetailsContainer";
import BookHeaderContainer from "../../container/BookHeaderContainer";

function BookMain() {
  return (
    <Container>
      <BookHeaderContainer />
      <Grid columns={2} divided>
        <Grid.Column>
          <BookListContainer />
        </Grid.Column>
        <Grid.Column>
          <BookDetailsContainer />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default BookMain;
