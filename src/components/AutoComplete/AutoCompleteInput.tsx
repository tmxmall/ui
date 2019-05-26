import React from 'react';
import TextField from '@material-ui/core/TextField';

const AutoCompleteInput = (classes, inputRef = (node: any) => {}, ref, ...other) => (
  <TextField
    fullWidth
    InputProps={{
      inputRef: node => {
        ref(node);
        inputRef(node);
      },
      classes: {
        input: classes.input,
      },
    }}
    {...other}
  />
);

export default AutoCompleteInput;
