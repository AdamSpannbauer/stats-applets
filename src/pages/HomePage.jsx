/* eslint-disable max-len */
import React from 'react';
import { Grid } from '@mui/material';
import DistPageCard from '../components/DistPageCard';

import normalDistCardImg from '../assets/home-page-imgs/normal.jpg';
import studentTDistCardImg from '../assets/home-page-imgs/student-t.jpg';
import chiSquareTDistCardImg from '../assets/home-page-imgs/chi-square.jpg';

function HomePage() {
  return (
    <div className="page">

      <Grid container spacing={1} alignItems="center" justifyContent="center" maxWidth="1500px">
        <Grid item align="center" xs={12}>
          <div className="homepage-text">
            <h1>Stats Applets</h1>
            <p>
              A collection of applets to calculate p-values, look up critical values, and visualize the area under the curve of a few popular distributions.
            </p>
            <p>
              Choose one of the the distributions below or use the
              &nbsp;
              <i className="fa-solid fa-bars" />
              &nbsp;
              in the top left to navigate.
            </p>
          </div>
        </Grid>
        <Grid item md={3}>
          <DistPageCard
            href="#/normal"
            cardTitle="Normal Distribution"
            altText="Normal Distribution"
            imgSrc={normalDistCardImg}
          />
        </Grid>
        <Grid item md={3}>
          <DistPageCard
            href="#/studentt"
            cardTitle="Student's t Distribution"
            altText="Student's t Distribution"
            imgSrc={studentTDistCardImg}
          />
        </Grid>
        <Grid item md={3}>
          <DistPageCard
            href="#/chisquare"
            cardTitle="Chi-Square Distribution"
            altText="Chi-Square Distribution"
            imgSrc={chiSquareTDistCardImg}
          />
        </Grid>
        <Grid item align="center" xs={12}>
          <div className="homepage-footer-text">
            <br />
            <br />
            <br />
            <br />
            <hr />
            <h3>This app is in a beta state</h3>
            <p>
              There are changes in layout, functionality, etc. that can happen without warning.
            </p>
            <p>
              This app was originally developed for use in the STAT201 course at the Unversitiy of Tennessee, Knoxville.
            </p>
            <p>
              Please report bugs to
              {' '}
              <a href="mailto:aspannba@utk.edu" target="_blank" rel="noreferrer">aspannba@utk.edu</a>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
