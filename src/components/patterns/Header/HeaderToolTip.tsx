import React from 'react'
import Help from '@material-ui/icons/Help'
import Info from '@material-ui/icons/Info'
import Search from '@material-ui/icons/Search'

import IconButton from '../../primitives/IconButton'

interface Props {
  icon: 'help' | 'info' | 'search'
  onClick?: () => void
}

const HeaderToolTip: React.FC<Props> = ({ icon, onClick }) => {
  switch (icon) {
    case 'help':
      return (
        <IconButton color="inherit">
          <Help />
        </IconButton>
      )
    case 'info':
      return (
        <IconButton color="inherit" onClick={onClick}>
          <Info />
        </IconButton>
      )
    case 'search':
      return (
        <IconButton color="inherit" onClick={onClick}>
          <Search />
        </IconButton>
      )
  }
}

export default HeaderToolTip
