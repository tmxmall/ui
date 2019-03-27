import React from 'react'

import Flex from '../../primitives/Flex'
import Link from '../../primitives/Link'
import Logo from '../../primitives/Logo'

interface Props {
  logo?: string
}

// TODO -> implement search
const HeaderLeft: React.FC<Props> = ({ logo }) => {
  return (
    <Flex alignItems="center">
      <Link to="/">
        <Logo logo={logo} />
      </Link>
    </Flex>
  )
}

export default HeaderLeft
