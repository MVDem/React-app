import * as React from 'react';
import { useDispatch } from 'react-redux';
import { countAdd } from './slices/testsSlice';

const Scheme1 = (props) => {
  const [activeButton, setActiveButton] = React.useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setActiveButton(true);
    if (event.target.value === props.elem.answers[props.elem.trueanswer - 1]) {
      dispatch(countAdd());
      props.setCorrectly(true);
      event.target.classList.add('scheme1__btn-true');
    } else {
      props.setCorrectly(false);
      event.target.classList.add('scheme1__btn-false');
      const el = document.querySelector(
        `button[value=${props.elem.answers[props.elem.trueanswer - 1]}]`
      );
      el.classList.add('scheme1__btn-true');
    }
  };

  return (
    <div className="scheme1">
      <h3 className="scheme1__question">{props.elem.question}</h3>
      <i />
      <div className="scheme1__answers">
        {props.elem.answers.map((answer, index) => {
          return (
            <button
              type="button"
              key={index}
              value={answer}
              className="scheme1__btn"
              disabled={activeButton}
              onClick={handleSubmit}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Scheme1;
