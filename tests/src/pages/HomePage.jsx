import * as React from 'react';
import { useAuth } from '../components/hooks/use-auth';

export default function MainPage() {
  const user = useAuth();
  console.log(user);
  return (
    <>
      <section className="home">
        <div className="home__wrapper">
          <h2 className="home__title">
            Приложение находится в состоянии разработки.
          </h2>
          <div className="home__subtitle">
            Вы можете перейти на вкладку "Tests" после авторизации.
          </div>
        </div>
      </section>
    </>
  );
}
