import React from 'react'
import FileCopy from '@material-ui/icons/FileCopy'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

import { copyToClipBoardUtility } from '../../../utils/cli-utils'
import { TEXT } from '../../../utils/constants'

interface Props {
  text: string
}

const CopyToClipBoardToolTip: React.FC<Props> = ({ text }) => {
  return (
    <Tooltip disableFocusListener title={TEXT.CLIPBOARD_COPY}>
      <IconButton onClick={copyToClipBoardUtility(text)}>
        <FileCopy />
      </IconButton>
    </Tooltip>
  )
}

export default CopyToClipBoardToolTip
