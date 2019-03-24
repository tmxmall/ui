import React from 'react'
import logo from './img/logo.svg'
import { makeStyles } from '@material-ui/styles'

interface Props {
  md?: boolean
}

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

const Logo: React.FC<Props> = () => {
  const classes = useStyles()
  return <div className={classes.logoClass} />
}

export default Logo
