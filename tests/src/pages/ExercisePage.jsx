import ExerciseList from '../components/exerciseList.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ExercisePage() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#e3f2fd', height: '90vh' }}>
          <ExerciseList />
        </Box>
      </Container>
    </>
  );
}

export default ExercisePage;
