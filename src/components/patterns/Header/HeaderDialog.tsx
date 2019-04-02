import React from 'react'
import RegistryInfoDialog from '../RegistryInfoDialog'
import LoginDialog from '../LoginDialog'

interface Props {
  dialog?: number
  scope: any
  onClose: () => void
}

const HeaderDialog: React.FC<Props> = ({ dialog, onClose, scope }) => {
  switch (dialog) {
    case 0:
      return <RegistryInfoDialog registryUrl="" onClose={onClose} scope={scope} open />
    case 1:
      return <LoginDialog onClose={onClose} />
    default:
      return null
  }
}

export default HeaderDialog
