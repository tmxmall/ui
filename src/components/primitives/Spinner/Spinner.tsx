import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

import Flex from '../Flex'

const useStyles = makeStyles((theme: Theme) => ({
  progress: {
    color: theme.colors.primary,
  },
}))

const Spinner: React.FC = (): React.ReactElement<HTMLDivElement> => {
  const classes = useStyles()
  return (
    <Flex alignItems="center" justifyContent="center">
      <CircularProgress className={classes.progress} size={50} />
    </Flex>
  )
}

export default Spinner
