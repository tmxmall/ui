import React from 'react'
import FileCopy from '@material-ui/icons/FileCopy'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

import copyToClipBoardUtility from './copy-to-clipboard'

interface Props {
  text: string
}

const CopyToClipBoardToolTip: React.FC<Props> = ({ text }) => {
  return (
    <Tooltip disableFocusListener title="Copy to ClipBoard">
      <IconButton onClick={() => copyToClipBoardUtility(text)}>
        <FileCopy />
      </IconButton>
    </Tooltip>
  )
}

export default CopyToClipBoardToolTip
