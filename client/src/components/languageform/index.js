import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button"


export default function SimpleSelect(props) {
  const [values, setValues] = React.useState({
    language: props.language,
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmit(event) {
    console.log(values.language)
  }

  return (
    <form>
      <FormControl>
        <InputLabel>Your Language</InputLabel>
        <Select
          value={values.language}
          onChange={handleChange}
          selected={props.selected}
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
        <Button onClick={formSubmit} variant="contained" color="primary">{props.text}</Button>
      <br />
      </FormControl>
    </form>
  );
}