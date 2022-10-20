import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Button color="inherit">
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Home
                </Typography>
              </Button>
            </NavLink>

            <NavLink to="/tests" style={{ textDecoration: 'none' }}>
              <Button color="inherit">
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Tests
                </Typography>
              </Button>
            </NavLink>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <main>
        <Outlet />
      </main>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        2022
      </AppBar>
    </>
  );
}

/*  */
