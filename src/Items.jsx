import React from 'react';
import { Paper, Button, Grid } from '@material-ui/core';

const Items = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item sm={4}>
        <Paper>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>

          <Button className="CheckButton">Check it out!</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Items;
