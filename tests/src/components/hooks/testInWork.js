import { useSelector } from 'react-redux';

export function useTestInWork() {
  const { testId, workUserId, timestamp, workTime, countOfTrueAnswers } =
    useSelector((state) => state.tests.testInWork);

  return {
    testId,
    workUserId,
    timestamp,
    workTime,
    countOfTrueAnswers,
  };
}
