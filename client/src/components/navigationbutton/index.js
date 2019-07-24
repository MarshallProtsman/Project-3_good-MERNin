import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


export default function NavButton(props) {
  return (
    <div>
      <Button component={Link} to={props.to} variant="contained" color="primary">
      {props.text}
      </Button>
    </div>
  );
}


        

