import React from 'react';
import './Main.sass';

import Posts from '../Posts/Posts';
import Categories from '../Categories/Categories';
import Social from '../Social/Social';

import { Grid} from '@mui/material';


function Main() {
  return (
    <main>

      <Grid container>
        <Grid item md={12}>
          <Categories />
        </Grid>
        <Grid item md={12}>
          <Posts />
        </Grid>
        <Social/>
      </Grid>

    </main>
  )
}

export default Main;