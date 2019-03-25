import React, { useState } from 'react'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

import Flex from '../../primitives/Flex'

import FooterIcon from './FooterIcon'

const useStyles = makeStyles((theme: Theme) => ({
  footerToolTipClass: {
    position: 'relative',
  },
  footerToolTipInnerClass: {
    position: 'absolute',
    backgroundColor: theme.colors.background,
    marginLeft: theme.spacings.tera,
    paddingRight: theme.spacings.mega,
  },
}))

const FooterToolTip: React.FC = () => {
  const classes = useStyles()
  const [showFlags, setShowFlags] = useState(false)
  return (
    <Flex spacingX="byte" className={classes.footerToolTipClass}>
      <FooterIcon icon="earth" onMouseOver={() => setShowFlags(true)} onMouseLeave={() => setShowFlags(false)} />
      <Fade in={showFlags}>
        <div className={classes.footerToolTipInnerClass}>
          <Flex alignItems="center" spacingX="byte">
            <FooterIcon icon="spain" />
            <FooterIcon icon="nicaragua" />
            <FooterIcon icon="india" />
            <FooterIcon icon="brazil" />
            <FooterIcon icon="pakistan" />
            <FooterIcon icon="china" />
            <FooterIcon icon="austria" />
          </Flex>
        </div>
      </Fade>
    </Flex>
  )
}

export default FooterToolTip
