import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testsAdd } from '../components/testsSlice';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TestsList() {
  const tests = useSelector((state) => state.tests.tests);
  const dispatch = useDispatch();
  if (!tests.length) {
    fetch(
      'https://raw.githubusercontent.com/MVDem/React-app/main/tests/api/v1/lessonList.json'
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        return dispatch(testsAdd(data));
      });
  }

  // dispatch(countReset());

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: '#e3f2fd',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            p: 3,
          }}
        >
          <div className="titleTestList">
            <Typography sx={{ mt: 2, mb: 1, mr: 2 }}>Выберите тест:</Typography>
          </div>
          <>
            {tests.map((test) => (
              <div key={test.id}>
                <Link
                  style={{ textDecoration: 'none', mr: 1 }}
                  to={`/tests/${test.nameTest}`}
                >
                  <Button variant="outlined">
                    <Typography
                      variant="h7"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      {test.nameTest}
                    </Typography>
                  </Button>
                </Link>
              </div>
            ))}
          </>
        </Box>
      </Container>
    </>
  );
}
