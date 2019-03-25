import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

import Link from '../../primitives/Link'
import Logo from '../../primitives/Logo'
import Button from '../../primitives/Button'
import Flex from '../../primitives/Flex'

import HeaderToolTip from './HeaderToolTip'
import HeaderMenu from './HeaderMenu'

interface Props {
  username: string
}

const useStyles = makeStyles(({ colors }: Theme) => ({
  headerClass: {
    backgroundColor: colors.primary,
    color: colors.white,
  },
}))

const Header: React.FC<Props> = ({ username }) => {
  const classes = useStyles()
  const [openInfoDialog, setOpenInfoDialog] = useState(false)
  return (
    <AppBar position="static" color="default" className={classes.headerClass}>
      <Toolbar>
        <Flex alignItems="center" justifyContent="space-between" fullWidth>
          <Flex alignItems="center">
            <Link to="/">
              <Logo />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <HeaderToolTip icon="search" />
            <HeaderToolTip icon="help" />
            <HeaderToolTip icon="info" />
            {username ? 'oi' : <Button onClick={() => setOpenInfoDialog(true)}>Login</Button>}
          </Flex>
        </Flex>
      </Toolbar>
    </AppBar>
  )
}

export default Header
