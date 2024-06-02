import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './components/Header';
import { P5Canvas } from './components/P5Canvas';
import { Portfolio } from './components/Portfolio';
import { PageFlipEffect } from './components/PageFlipEffect';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const App: React.FC = () => {
  const [flipFinished, setFlipFinished] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!flipFinished && <PageFlipEffect onFinish={() => setFlipFinished(true)} />}
      {flipFinished && (
        <>
          <Header />
          <div style={{ marginTop: '64px' }}>
            <P5Canvas />
            <Portfolio />
          </div>
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
