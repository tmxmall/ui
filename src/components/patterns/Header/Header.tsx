import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

import RegistryInfoDialog from '../RegistryInfoDialog'
import Flex from '../../primitives/Flex'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

interface Props {
  username: string
  registryUrl: string
  scope: string
}

const useStyles = makeStyles(({ colors }: Theme) => ({
  headerClass: {
    backgroundColor: colors.primary,
    color: colors.white,
  },
}))

const Header: React.FC<Props> = ({ username, scope }) => {
  const classes = useStyles()
  const [openInfoDialog, setOpenInfoDialog] = useState(false)

  return (
    <AppBar position="static" color="default" className={classes.headerClass}>
      <Toolbar>
        <Flex alignItems="center" justifyContent="space-between" fullWidth>
          <HeaderLeft />
          <HeaderRight username={username} onOpenInfoDialog={() => setOpenInfoDialog(true)} />
        </Flex>
        <RegistryInfoDialog
          open={openInfoDialog}
          registryUrl=""
          onClose={() => setOpenInfoDialog(false)}
          scope={scope}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
