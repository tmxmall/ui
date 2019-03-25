import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

interface Props {
  open: boolean
  onClose?: () => void
  anchorEl: HTMLElement
}

const HeaderMenu: React.FC<Props> = ({ open, anchorEl, onClose, onLogout }) => {
  return (
    // <>
    //   <IconButton color="inherit" onClick={handleLoggedInMenu}>
    //     <AccountCircle />
    //   </IconButton>
    //   <Menu
    //     anchorEl={anchorEl}
    //     anchorOrigin={{
    //       vertical: 'top',
    //       horizontal: 'right',
    //     }}
    //     onClose={onClose}
    //     open={open}
    //     transformOrigin={{
    //       vertical: 'top',
    //       horizontal: 'right',
    //     }}>
    //     <MenuItem disabled>{renderGreetings()}</MenuItem>
    //     <MenuItem onClick={onLogout}>Logout</MenuItem>
    //   </Menu>
    // </>
    null
  )
}

export default HeaderMenu
