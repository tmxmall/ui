import React from 'react'

import Flex from '../../primitives/Flex'
import Button from '../../primitives/Button'

import HeaderToolTip from './HeaderToolTip'

interface Props {
  username: any
  onOpenInfoDialog: () => void
}

const HeaderRight: React.FC<Props> = ({ username, onOpenInfoDialog }) => {
  return (
    <Flex alignItems="center">
      <HeaderToolTip icon="search" />
      <HeaderToolTip icon="help" />
      <HeaderToolTip icon="info" onClick={onOpenInfoDialog} />
      <Button>Login</Button>
    </Flex>
  )
}

export default HeaderRight
