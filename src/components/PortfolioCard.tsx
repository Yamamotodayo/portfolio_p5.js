// src/components/PortfolioCard.tsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface PortfolioCardProps {
  title: string;
  description: string;
  link: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, link }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="contained" color="primary" href={link} target="_blank" rel="noopener noreferrer" sx={{ mt: 2 }}>
          View Project
        </Button>
      </CardContent>
    </Card>
  );
};

