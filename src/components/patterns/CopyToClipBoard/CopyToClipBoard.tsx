import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'

import Flex from '../../primitives/Flex'
import Text from '../../primitives/Text'

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
      <Text className={classes.textClass}>{text}</Text>
      <CopyToClipBoardToolTip text={text} />
    </Flex>
  )
}

export default CopyToClipBoard
