import * as React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Exercise from '../components/exercise';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';

export default function ExercisePage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const tests = useSelector((state) => state.tests.tests);

  const activeTestName = useParams().id;

  const activeExercises = tests.find(
    (elem) => elem.nameTest === activeTestName
  );

  const totalSteps = () => {
    return activeExercises.test.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? activeExercises.test.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const stepDisplay = (arr) => {
    return (
      <div key={arr[activeStep].numExercise} className="container">
        <Exercise handleComplete={handleComplete} elem={arr[activeStep]} />
      </div>
    );
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#e3f2fd', height: '90vh' }}>
          <Box sx={{ width: '100%', pt: '50px' }}>
            <Stepper nonLinear activeStep={activeStep}>
              {activeExercises.test.map((elem, index) => {
                return (
                  <Step key={index} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      Esercise {elem.numExercise}
                    </StepButton>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {allStepsCompleted() ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished. You answered {}{' '}
                    questions correctly
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1, py: 1 }}></Typography>
                  {stepDisplay(activeExercises.test)}
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    {/* <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button> */}
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                      Next
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}
