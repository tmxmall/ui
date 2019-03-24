import React from 'react'
import { default as MuiIconButton, IconButtonProps } from '@material-ui/core/IconButton'

const IconButton: React.FC<IconButtonProps> = props => <MuiIconButton color="inherit" {...props} />

export default IconButton
