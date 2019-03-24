import React from 'react'
import { default as MuiButton, ButtonProps } from '@material-ui/core/Button'

const Button: React.FC<ButtonProps> = props => <MuiButton color="inherit" {...props} />

export default Button
