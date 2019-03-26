import React from 'react'
import IconButton from '@material-ui/core/IconButton'

import HeaderToolTipIcon from './HeaderToolTipIcon'

export type IconType = 'help' | 'info' | 'search'

interface Props {
  icon: IconType
  onClick: () => void
}

const HeaderToolTip: React.FC<Props> = ({ icon, onClick }) => (
  <IconButton color="inherit" onClick={onClick}>
    <HeaderToolTipIcon icon={icon} />
  </IconButton>
)

export default HeaderToolTip
