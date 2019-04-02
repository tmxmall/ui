import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

import CopyToClipBoard from '../CopyToClipBoard'

import getCLI from './get-cli'

import { NODE_MANAGER } from './RegistryInfoContent'

interface Props {
  tabPosition: number
  registryUrl: string
  scope: string
}

const useStyles = makeStyles(({ spacings }: Theme) => ({
  root: {
    padding: spacings.none,
    minHeight: 170,
  },
}))

const RegistryInfoTabContent: React.FC<Props> = ({ tabPosition, registryUrl, scope }) => {
  const classes = useStyles()
  switch (tabPosition) {
    case 0:
      return (
        <Typography component="div" className={classes.root}>
          <CopyToClipBoard text={getCLI('config', NODE_MANAGER.NPM, registryUrl, scope)} />
          <CopyToClipBoard text={getCLI('registry', `${NODE_MANAGER.NPM} adduser`, registryUrl)} />
          <CopyToClipBoard text={getCLI('password', NODE_MANAGER.NPM, registryUrl)} />
        </Typography>
      )
    case 1:
      return (
        <Typography component="div" className={classes.root}>
          <CopyToClipBoard text={getCLI('config', NODE_MANAGER.PNPM, registryUrl, scope)} />
          <CopyToClipBoard text={getCLI('registry', `${NODE_MANAGER.PNPM} adduser`, registryUrl)} />
          <CopyToClipBoard text={getCLI('password', NODE_MANAGER.PNPM, registryUrl)} />
        </Typography>
      )
    case 2:
      return (
        <Typography component="div" className={classes.root}>
          <CopyToClipBoard text={getCLI('config', `${NODE_MANAGER.YARN} config set`, registryUrl, scope)} />
        </Typography>
      )
    default:
      return null
  }
}

export default RegistryInfoTabContent
