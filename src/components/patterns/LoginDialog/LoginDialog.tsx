import React from 'react'
import PyroForm from 'pyro-form'

import Flex from '../../primitives/Flex'
import Button from '../../primitives/Button'
import Dialog from '../../primitives/Dialog'

import LoginForm from './LoginForm'

interface Props {
  onClose: () => void
}

const LoginDialog: React.FC<Props> = ({ onClose }) => (
  <Dialog title="Login" onClose={onClose} maxWidth="xs" fullWidth open>
    <LoginForm />
  </Dialog>
)

export default LoginDialog
