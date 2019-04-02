import React from 'react'
import MuiTextField, { OutlinedTextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField'
import { usePyroField, PyroFormValues } from 'pyro-form'

interface Props<Values extends PyroFormValues> extends Omit<MuiTextFieldProps, 'variant'> {
  name: Extract<keyof Values, string>
}

const TextField = <Values extends PyroFormValues = any>({ name, ...muiProps }: Props<Values>) => {
  const { meta, core } = usePyroField<Values, Extract<keyof Values, string>>(name)
  return (
    <MuiTextField
      {...core}
      {...muiProps}
      error={meta.touched ? !!meta.error : undefined}
      helperText={meta.touched ? meta.error : undefined}
      variant="outlined"
    />
  )
}

export default TextField
