import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'

interface Props {
  children: React.ReactElement
  open: boolean
  onClose: () => void
}

const RegistryInfoDialog: React.FC<Props> = ({ children, onClose, open }) => (
  <Dialog onClose={onClose} open={open}>
    <DialogTitle disableTypography>Register Info</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button color="inherit" onClick={onClose}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
)

export default RegistryInfoDialog
