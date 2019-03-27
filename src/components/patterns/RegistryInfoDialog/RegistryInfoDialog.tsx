import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'

import RegistryInfoContent from './RegistryInfoContent'

interface Props {
  open: boolean
  onClose: () => void
  scope: string
  registryUrl: string
}

const RegistryInfoDialog: React.FC<Props> = ({ onClose, open, ...props }) => (
  <Dialog onClose={onClose} open={open}>
    <DialogTitle disableTypography>Register Info</DialogTitle>
    <DialogContent>
      <RegistryInfoContent {...props} />
    </DialogContent>
    <DialogActions>
      <Button color="inherit" onClick={onClose}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
)

export default RegistryInfoDialog
