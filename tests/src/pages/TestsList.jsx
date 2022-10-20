import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function TestsList() {
  const [tests, setTests] = useState([]);
  useEffect((errorCallBack) => {
    fetch('/api/v1/lessonList.json')
      .then((response) => {
        if (response.ok) {
          console.log(response.json());

          return response.json();
        }
      })
      .then((data) => {
        console.log(data);

        return setTests(data);
      })
      .catch((error) => {
        return errorCallBack(error);
      });
  });
  console.log(tests);
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#e3f2fd', height: '90vh' }}>
          {tests.map((test, i) => (
            <Link key={i} to={''}>
              <li>{tests[0]}</li>
            </Link>
          ))}
        </Box>
      </Container>
    </>
  );
}
