import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Flex from '../../primitives/Flex'

import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

const Footer: React.FC = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Flex alignItems="center" justifyContent="space-between" fullWidth>
        <FooterLeft />
        <FooterRight />
      </Flex>
    </Toolbar>
  </AppBar>
)

export default Footer
