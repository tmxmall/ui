import React from 'react'
import Help from '@material-ui/icons/Help'
import Info from '@material-ui/icons/Info'
import Search from '@material-ui/icons/Search'

import { IconType } from './HeaderToolTip'

interface Props {
  icon: IconType
}

const HeaderToolTipIcon: React.FC<Props> = ({ icon }) => {
  switch (icon) {
    case 'help':
      return <Help />
    case 'info':
      return <Info />
    case 'search':
      return <Search />
  }
}

export default HeaderToolTipIcon
