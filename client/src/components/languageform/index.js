import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


export default function SimpleSelect() {
  const [values, setValues] = React.useState({
    language: '',
    name: ""
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmit(event) {
    event.preventDefault()
    alert(values.language + " was selected!")
  }

  return (
    <form className="" autoComplete="off">

      <FormControl className="">
        <InputLabel htmlFor="age-helper">Your Language</InputLabel>
        <Select
          value={values.language}
          onChange={handleChange}
          input={<Input name="language" id="age-helper" />}
        >
          <MenuItem value="language">
          </MenuItem>
          <MenuItem value={"fr"}>French</MenuItem>
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"it"}>Italian</MenuItem>
          <MenuItem value={"es"}>Spanish</MenuItem>
        </Select>
        <FormHelperText>What language would you like to learn?</FormHelperText>
        <br />
      </FormControl>
      <br />
      <Button onClick={formSubmit} variant="contained" color="primary">
        Submit Language Choice
            </Button>
    </form>
  );
}