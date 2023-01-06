import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testsAdd } from '../components/slices/testsSlice';
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
        <h2 className="tests__title">Выберите тест:</h2>
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
                <h3 className="tests__subtitle">{test.nameTest}</h3>
                <div className="tests__drop">
                  <p className="tests__description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum voluptates, et voluptate est eius similique hic soluta
                    reprehenderit repellendus esse?
                  </p>

                  <Link to={`/tests/${test.id}`}>
                    <button type="button" className="tests__button">
                      Пройти тест
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </>
        </div>
      </section>
    </>
  );
}
