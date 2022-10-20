import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import lesson1 from '../server/lesson';

export default function Example(props) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Select an answer');
  const [activeButton, setActiveButton] = React.useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === lesson1[0].answers[lesson1.trueanswer - 1]) {
      setHelperText('You answered correctly!');
      setError(false);
      setActiveButton(true);
    } else if (value) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
      setActiveButton(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">{lesson1.question}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {lesson1[0].answers.map((answer, index) => {
            return (
              <FormControlLabel
                key={index}
                value={answer}
                control={<Radio />}
                label={answer}
                disabled={activeButton}
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
