import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ProgressBar from './ProgressBar';
import Scheme1 from './Scheme1';

export default function Exercise(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [correctly, setCorrectly] = React.useState();
  const tests = useSelector((state) => state.tests.tests);
  const activeTestId = +useParams().id;

  const activeExercises = tests.find((elem) => elem.id === activeTestId);

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
    if (completedSteps() === totalSteps()) {
      props.setTestComplite(false);
    }
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep = function () {
      if (isLastStep() && !allStepsCompleted()) {
        return activeExercises.test.findIndex((step, i) => !(i in completed));
      } else if (activeStep + 1 in completed) {
        return activeExercises.test.findIndex(
          (step, i) => i > activeStep && !(i in completed)
        );
      } else {
        return activeStep + 1;
      }
    };
    setActiveStep(newActiveStep);
    handleComplete();
    setCorrectly();
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    if (correctly !== undefined) {
      newCompleted[activeStep] = correctly;
    }
    setCompleted(newCompleted);
  };

  const stepDisplay = (arr) => {
    return (
      <div key={arr[activeStep].numExercise} className="container">
        <Scheme1
          elem={arr[activeStep]}
          handleComplete={handleComplete}
          setCorrectly={setCorrectly}
        />
      </div>
    );
  };

  return (
    <>
      <section className="exercise">
        <div>
          <ProgressBar
            activeExercises={activeExercises.test}
            activeStep={activeStep}
            completed={completed}
            handleStep={handleStep}
          />
          <React.Fragment>
            <div className="exercise__answer">
              {stepDisplay(activeExercises.test)}
            </div>
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button>
          </React.Fragment>
        </div>
      </section>
    </>
  );
}
