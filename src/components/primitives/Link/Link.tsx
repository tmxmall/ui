import React from 'react'
import { makeStyles } from '@material-ui/styles'

interface Props {
  to?: string
  blank?: boolean
}

const useStyles = makeStyles({
  root: {
    color: 'inherit',
  },
})

const Link: React.FC<Props> = ({
  children,
  to = '#',
  blank = false,
  ...props
}): React.ReactElement<HTMLAnchorElement> => {
  const classes = useStyles()
  return (
    <a href={to} target={blank ? '_blank' : '_self'} className={classes.root} {...props}>
      {children}
    </a>
  )
}

export default Link
