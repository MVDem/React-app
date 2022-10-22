import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function TestsList() {
  const [tests, setTests] = useState([]);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/MVDem/React-app/main/tests/api/v1/lessonList.json'
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        return setTests(data);
      });
  }, []);
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#e3f2fd', height: '90vh' }}>
          {tests.map((test) => (
            <Link key={test.id} to={`/tests/${test.nameTest}`}>
              <li>{test.nameTest}</li>
            </Link>
          ))}
        </Box>
      </Container>
    </>
  );
}
