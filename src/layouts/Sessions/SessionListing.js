import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import SessionCard from './SessionCard'
const CourseListing = () => {
  const cardData = [
    { id: 1, title: 'Card 1', content: 'Content for card 1' },
    { id: 2, title: 'Card 2', content: 'Content for card 2' },
    { id: 3, title: 'Card 3', content: 'Content for card 3' },
    { id: 4, title: 'Card 4', content: 'Content for card 4' },
    { id: 5, title: 'Card 5', content: 'Content for card 5' },
    { id: 6, title: 'Card 6', content: 'Content for card 6' },
    { id: 7, title: 'Card 7', content: 'Content for card 7' },
  ];

  return (
    <Grid container spacing={2} marginTop={2}>
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <SessionCard/>
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseListing;
