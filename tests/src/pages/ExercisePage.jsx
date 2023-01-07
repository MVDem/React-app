import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTestInWork } from '../components/slices/testsSlice';
import { useAuth } from '../components/hooks/use-auth';
import Exercise from '../components/Exercise';
import Result from '../components/Result';

export default function ExercisePage() {
  const [testComplite, setTestComplite] = React.useState(true);
  const { userId } = useAuth();
  const dispatch = useDispatch();
  const activeTestId = +useParams().id;
  const startDate = Date.now();
  React.useEffect(() => {
    dispatch(
      setTestInWork({
        testId: activeTestId,
        workUserId: userId,
        startDate: startDate,
      })
    );
  }, []);

  return (
    <>
      {testComplite ? (
        <Exercise setTestComplite={setTestComplite} />
      ) : (
        <Result />
      )}
    </>
  );
}
