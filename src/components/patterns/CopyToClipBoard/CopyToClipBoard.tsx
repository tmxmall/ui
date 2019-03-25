import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'

import Flex from '../../primitives/Flex'

import CopyToClipBoardToolTip from './CopyToClipBoardToolTip'

const useStyles = makeStyles((theme: Theme) => ({
  textClass: {
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: theme.sizing.byte,
  },
}))

interface Props {
  text: string
}

const CopyToClipBoard: React.FC<Props> = ({ text }) => {
  const classes = useStyles()
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <div className={classes.textClass}>{text}</div>
      <CopyToClipBoardToolTip text={text} />
    </Flex>
  )
}

export default CopyToClipBoard
