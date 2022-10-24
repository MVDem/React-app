import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function MainPage() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#e3f2fd', height: '90vh' }}>
          <h2 className="homePageError">
            Приложение находится в состоянии разработки.
          </h2>
          <p>Вы можете перейти на вкладку "Tests"</p>
        </Box>
      </Container>
    </>
  );
}
