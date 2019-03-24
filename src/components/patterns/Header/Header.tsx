import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

import Link from '../../primitives/Link'
import Logo from '../../primitives/Logo'

const useStyles = makeStyles(({ colors }: Theme) => ({
  headerClass: {
    backgroundColor: colors.primary,
    color: colors.white,
  },
}))

const Header: React.FC = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="default" className={classes.headerClass}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          <Link to="/">
            <Logo />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
