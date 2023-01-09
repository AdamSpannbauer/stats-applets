import { Box, Grid } from '@mui/material';
import React from 'react';

function HomePage() {
  return (
    <div className="page">
      <Box>
        <Grid item align="center">
          <h1>This app is in an unstable alpha state.</h1>
          <p>There are changes in layout, functionality, etc. that will happen without warning.</p>
          <p>
            Please report bugs to
            {' '}
            <a href="mailto:aspannba@utk.edu" target="_blank" rel="noreferrer">aspannba@utk.edu</a>
          </p>
        </Grid>
      </Box>
    </div>
  );
}

export default HomePage;
