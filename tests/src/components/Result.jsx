import * as React from 'react';
import { useDispatch } from 'react-redux';
import { countReset } from '../components/slices/testsSlice';
import Button from '@mui/material/Button';
import { useTestInWork } from '../components/hooks/use-testInWork';
import { setTestInWork } from '../components/slices/testsSlice';
import { NavLink } from 'react-router-dom';

export default function Result() {
  const { startDate, endDate, countOfTrueAnswers } = useTestInWork();
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(countReset());
  };
  React.useEffect(() => {
    const endDate = Date.now();
    dispatch(
      setTestInWork({
        endDate: endDate,
      })
    );
  }, []);

  const timeWork = endDate - startDate;

  const getUserTime = (t = new Date()) => {
    const m = t.getMinutes();
    const s = t.getSeconds();

    return `${m}min ${s}sec`;
  };

  return (
    <>
      <section className="exercise">
        <React.Fragment>
          <p className="exercise__text">
            All steps completed - you&apos;re finished. You answered{' '}
            {countOfTrueAnswers} questions correctly.
          </p>
          <p>You spent {getUserTime(new Date(timeWork))}! </p>

          <NavLink to="/tests" className="header__btn">
            <Button onClick={handleReset}>Сhoose a new test</Button>
          </NavLink>
        </React.Fragment>
      </section>
    </>
  );
}
