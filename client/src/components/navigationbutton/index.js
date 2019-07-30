import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";


export default function NavButton(props) {
  return (
    <Box>
      <Button component={Link} to={props.to} variant="contained" color="primary">
      {props.text}
      </Button>
    </Box>
  );
}


        

