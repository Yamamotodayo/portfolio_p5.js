// src/components/Portfolio.tsx
import React from 'react';
import Grid from '@mui/material/Grid';
import { PortfolioCard } from './PortfolioCard';

const projects = [
    { title: 'Project 1', description: 'Description for project 1', link: '#' },
    { title: 'Project 2', description: 'Description for project 2', link: '#' },
    // 他のプロジェクトもここに追加
];

export const Portfolio: React.FC = () => {
    return (
        <Grid container spacing={2} padding={2}>
            {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <PortfolioCard
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

