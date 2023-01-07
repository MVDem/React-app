import { useSelector } from 'react-redux';

export function useTestInWork() {
  const { testId, workUserId, startDate, endDate, countOfTrueAnswers } =
    useSelector((state) => state.tests.testInWork);

  return {
    testId,
    workUserId,
    startDate,
    endDate,
    countOfTrueAnswers,
  };
}
