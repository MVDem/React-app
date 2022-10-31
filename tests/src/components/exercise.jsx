import * as React from 'react';
import { useDispatch } from 'react-redux';
import { countAdd } from '../components/testsSlice';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function Example(props) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Select an answer');
  const [activeLable, setActiveLable] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState(true);
  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
    setActiveButton(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === props.elem.answers[props.elem.trueanswer - 1]) {
      setHelperText('You answered correctly!');
      setError(false);
      setActiveLable(true);
      dispatch(countAdd());
    } else if (value) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
      setActiveLable(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">{props.elem.question}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {props.elem.answers.map((answer, index) => {
            return (
              <FormControlLabel
                key={index}
                value={answer}
                control={<Radio />}
                label={answer}
                disabled={activeLable}
              />
            );
          })}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button
          sx={{ mt: 1, mr: 1 }}
          type="submit"
          variant="outlined"
          disabled={activeButton}
          onClick={props.handleComplete}
        >
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}
