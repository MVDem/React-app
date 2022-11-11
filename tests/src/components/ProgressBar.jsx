import React from 'react';

export default function ProgressBar(props) {
  return (
    <section>
      <ul className="Progress">
        {props.activeExercises.map((elem, index) => {
          const classNameButton = () => {
            if (props.activeStep === index) {
              return 'Progress__item Progress__item-active';
            } else if (props.completed[index]) {
              return 'Progress__item Progress__item-completed';
            } else {
              return 'Progress__item';
            }
          };

          return (
            <li
              key={index}
              className={classNameButton()}
              onClick={props.handleStep(index)}
            >
              <span className="Progress__count">{index + 1}</span>
              <span className="Progress__lable">{index + 1}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
