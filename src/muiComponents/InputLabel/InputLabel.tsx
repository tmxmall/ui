import React, { forwardRef } from 'react';
import { default as MaterialUIInputLabel, InputLabelProps } from '@material-ui/core/InputLabel';

type InputLabelRef = HTMLLabelElement;

const InputLabel = forwardRef<InputLabelRef, InputLabelProps>(function InputLabel(props, ref) {
  return <MaterialUIInputLabel {...props} ref={ref} />;
});

export default InputLabel;
