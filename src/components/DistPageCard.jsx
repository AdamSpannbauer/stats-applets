/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';

import { CardActionArea } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function DistPageCard(props) {
  const {
    href, imgSrc, altText, cardTitle, cardText,
  } = props;
  return (
    <Card sx={{ maxWidth: 345, border: '0.05em solid #878a97', boxShadow: '3px 5px #373a4744' }}>
      <CardActionArea href={href}>
        <CardMedia
          component="img"
          height="200"
          image={imgSrc}
          alt={altText}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DistPageCard;
