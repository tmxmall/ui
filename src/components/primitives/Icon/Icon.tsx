import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Svg, { SvgIconProps } from '@material-ui/core/SvgIcon'
import { Sizing } from '../../../theme-utils/theme'
import { Theme } from '@material-ui/core/styles'
import responsiveProp from '../../../theme-utils/responsive-prop'
import resolveSizing from '../../../theme-utils/resolve-sizing'

import getIcon from './get-icon'

const iconType = {
  verdaccio: 'verdaccio',
  license: 'license',
}

export type IconType = keyof typeof iconType

export interface IconProps extends SvgIconProps {
  icon: IconType
  size?: Sizing | Array<Sizing>
}

const useStyles = makeStyles((theme: Theme) => ({
  iconClass: ({ size }: Pick<IconProps, 'size'>) => ({
    ...responsiveProp('width', resolveSizing(theme)(size)),
  }),
}))

const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const classes = useStyles(props)
  const { viewBox, content } = getIcon(icon)
  return (
    <Svg viewBox={viewBox} {...props} className={classes.iconClass}>
      {content}
    </Svg>
  )
}

Icon.defaultProps = {
  size: 'byte',
}

export default Icon
