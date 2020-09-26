import React from "react";
import { Grid } from "semantic-ui-react";

import BookListContainer from "../../container/BookListContainer";
import BookDetailsContainer from "../../container/BookDetailsContainer";

function BookMain() {
  return (
    <Grid columns={2} divided style={{ marginTop: "30px" }}>
      <Grid.Column>
        <BookListContainer />
      </Grid.Column>
      <Grid.Column>
        <BookDetailsContainer />
      </Grid.Column>
    </Grid>
  );
}

export default BookMain;
