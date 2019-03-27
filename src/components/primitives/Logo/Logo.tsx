import React from 'react'
import logo from './img/logo.svg'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  logoClass: {
    display: 'inline-block',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    width: 40,
    height: 40,
  },
})

interface Props {
  logo?: string
}

// TODO -> The logo should be an object with name and path
const Logo: React.FC<Props> = ({ logo }) => {
  const classes = useStyles()
  if (logo) {
    return <img src={logo} height={40} />
  }
  return <div className={classes.logoClass} />
}

export default Logo
