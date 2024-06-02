// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const Header: React.FC = () => {
    const scrollPosition = useScrollPosition();
    const [hidden, setHidden] = useState(false);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        if (scrollPosition > lastScrollPosition && scrollPosition > 200) {
            setHidden(true);
        } else if (scrollPosition < lastScrollPosition) {
            setHidden(false);
        }
        setLastScrollPosition(scrollPosition);
    }, [scrollPosition, lastScrollPosition]);

    useEffect(() => {
        console.log('hidden:', hidden);
    }, [hidden]);

    return (
        <AppBar
            position="fixed"
            sx={{
                top: hidden ? '-100px' : '0',
                transition: 'top 0.5s',
            }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
            </Toolbar>
        </AppBar>
    );
};