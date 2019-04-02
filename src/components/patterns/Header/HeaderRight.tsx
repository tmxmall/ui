import React from 'react'

import Flex from '../../primitives/Flex'
import Button from '../../primitives/Button'
import Link from '../../primitives/Link'

import HeaderToolTip from './HeaderToolTip'

interface Props {
  username: any
  onOpenDialog: (dialog: number) => void
}

const HeaderRight: React.FC<Props> = ({ username, onOpenDialog }) => {
  return (
    <Flex alignItems="center">
      <HeaderToolTip icon="search" />
      <Link to="https://verdaccio.org/docs/en/installation" blank>
        <HeaderToolTip icon="help" />
      </Link>
      <HeaderToolTip icon="info" onClick={() => onOpenDialog(0)} />
      <Button onClick={() => onOpenDialog(1)}>Login</Button>
    </Flex>
  )
}

export default HeaderRight
