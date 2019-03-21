import React, { useState } from 'react'
import Fade from '@material-ui/core/Fade'

import Flex from '../../primitives/Flex'
import Icon from '../../primitives/Icon'

const FooterToolTip: React.FC = () => {
  const [showFlags, setShowFlags] = useState(false)
  return (
    <Flex spacingX="byte">
      <Icon icon="brazil" onMouseOver={() => setShowFlags(true)} onMouseLeave={() => setShowFlags(false)} />
      <Fade in={showFlags}>
        <div>
          <Flex alignItems="center" spacingX="byte">
            <Icon icon="spain" />
            <Icon icon="nicaragua" />
            <Icon icon="india" />
            <Icon icon="brazil" />
            <Icon icon="pakistan" />
            <Icon icon="china" />
            <Icon icon="austria" />
          </Flex>
        </div>
      </Fade>
    </Flex>
  )
}

export default FooterToolTip
