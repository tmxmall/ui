import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'
import responsiveProp from '../../../theme-utils/responsive-prop'

import getIcon from './get-icon'

const iconType = {
  love: 'love',
  earth: 'earth',
  austria: 'austria',
  brazil: 'brazil',
  china: 'china',
  india: 'india',
  nicaragua: 'nicaragua',
  spain: 'spain',
  pakistan: 'pakistan',
}

export type IconType = keyof typeof iconType

export interface IconProps {
  icon: IconType
  onMouseOver?: () => void
  onMouseLeave?: () => void
}

const useStyles = makeStyles(({ sizing }: Theme) => ({
  footerIconClass: responsiveProp('width', sizing.byte),
}))

const FooterIcon: React.FC<IconProps> = ({ icon, ...props }) => {
  const classes = useStyles()
  const { title, content } = getIcon(icon)
  return <img src={content} title={title} className={classes.footerIconClass} {...props} />
}

export default FooterIcon
