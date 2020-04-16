/* eslint-disable import/prefer-default-export */
import React from 'react';

import { Grid } from '@material-ui/core';

export const CenterDecorator = storyFn => (
  <Grid
    container
    justify="center"
    style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
  >
    {storyFn()}
  </Grid>
);
