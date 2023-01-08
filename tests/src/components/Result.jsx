import * as React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { testReset } from '../components/slices/testsSlice';
import Button from '@mui/material/Button';
import { useTestInWork } from '../components/hooks/use-testInWork';
import { setTestInWork } from '../components/slices/testsSlice';
import { getData, setData } from '../firebase';
import { useState } from 'react';

export default function Result() {
  const { testId, workUserId, startDate, endDate, countOfTrueAnswers } =
    useTestInWork();
  const [lastData, setLastData] = useState({});
  const dispatch = useDispatch();
  React.useEffect(() => {
    const endDate = Date.now();
    dispatch(
      setTestInWork({
        endDate: endDate,
      })
    );
    getData(`results/${workUserId}/${testId}`, setLastData);
  }, []);

  const handleFinish = () => {
    if (countOfTrueAnswers > lastData.count || !lastData.count) {
      setData(`results/${workUserId}/${testId}`, resultData);
    }
    dispatch(testReset());
  };

  const resultData = {
    userId: workUserId,
    testId: testId,
    timeStamp: startDate,
    count: countOfTrueAnswers,
  };

  const timeWork = endDate - startDate;

  const getResultDate = (t) => {
    const Y = t.getFullYear();
    const M = t.getMonth() + 1;
    const d = t.getDate();
    const h = t.getHours();
    const m = t.getMinutes();
    const s = t.getSeconds();
    return `${h}:${m}:${s} on ${d}/${M}/${Y}`;
  };

  const getUserTime = (t = new Date()) => {
    const m = t.getMinutes();
    const s = t.getSeconds();

    return `${m}min ${s}sec`;
  };

  return (
    <>
      <section className="exercise">
        <React.Fragment>
          <div>
            <p className="exercise__text">
              All steps completed - you&apos;re finished. You answered{' '}
              {countOfTrueAnswers} questions correctly.
            </p>
            <p className="exercise__text">
              You spent {getUserTime(new Date(timeWork))}!{' '}
            </p>
            {lastData.count && (
              <p className="exercise__text">
                Your best score is {lastData.count} has been received{' '}
                {getResultDate(new Date(lastData.timeStamp))}
              </p>
            )}
          </div>
          <NavLink to="/tests" className="header__btn">
            <Button onClick={handleFinish}>Сhoose a new test</Button>
          </NavLink>
        </React.Fragment>
      </section>
    </>
  );
}
