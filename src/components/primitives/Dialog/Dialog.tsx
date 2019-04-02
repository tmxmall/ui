import { default as MuiDialog, DialogProps } from '@material-ui/core/Dialog'
import React from 'react'

import DialogActions from './DialogActions'
import DialogContent from './DialogContent'
import DialogTitle from './DialogTitle'

interface Props extends DialogProps {
  children: React.ReactElement
  actions?: React.ReactElement
}

const Dialog: React.FC<Props> = ({ actions, children, title, ...props }) => (
  <MuiDialog {...props}>
    {title && <DialogTitle>{title}</DialogTitle>}
    <DialogContent>{children}</DialogContent>
    {actions && <DialogActions>{actions}</DialogActions>}
  </MuiDialog>
)

export default Dialog
