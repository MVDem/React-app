import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testsAdd } from '../components/testsSlice';
import { Link } from 'react-router-dom';

export default function TestsList() {
  const tests = useSelector((state) => state.tests.tests);
  const dispatch = useDispatch();
  if (!tests.length) {
    fetch(
      'https://raw.githubusercontent.com/MVDem/React-app/main/tests/api/v1/lessonList.json'
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        return dispatch(testsAdd(data));
      });
  }

  // dispatch(countReset());

  return (
    <>
      <section className="tests">
        <h2>Выберите тест:</h2>
        <div className="tests__list">
          <>
            {tests.map((test) => (
              <div key={test.id} className="tests__item">
                <img
                  src="./img/alef.jpg"
                  width="150"
                  height="150"
                  alt="alef"
                  className="tests__img"
                />
                <p className="tests__description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum voluptates, et voluptate est eius similique hic soluta
                  reprehenderit repellendus esse?
                </p>

                <Link to={`/tests/${test.nameTest}`}>
                  <button type="button" className="tests__button">
                    {test.nameTest}
                  </button>
                </Link>
              </div>
            ))}
          </>
        </div>
      </section>
    </>
  );
}
