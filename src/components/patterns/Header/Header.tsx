import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

import Flex from '../../primitives/Flex'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import HeaderDialog from './HeaderDialog'

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
  const [dialog, setDialog] = useState<number | undefined>(undefined)

  const handleOpenDialog = (dialog: number) => {
    setDialog(dialog)
  }

  return (
    <AppBar position="static" color="default" className={classes.headerClass}>
      <Toolbar>
        <Flex alignItems="center" justifyContent="space-between" fullWidth>
          <HeaderLeft />
          <HeaderRight username={username} onOpenDialog={handleOpenDialog} />
        </Flex>
        <HeaderDialog dialog={dialog} scope={scope} onClose={() => setDialog(undefined)} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
