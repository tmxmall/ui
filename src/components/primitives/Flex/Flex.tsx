import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { Theme } from '@material-ui/core/styles'

import { Spacings } from '../../../theme-utils/theme'
import responsiveProp from '../../../theme-utils/responsive-prop'

type Display = 'flex' | 'inline-flex'
type FlexDirection = 'row' | 'column'
type AlignItems = 'center' | 'flex-start' | 'flex-end'
type JustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'

interface Props {
  alignItems?: AlignItems | Array<AlignItems>
  justifyContent?: JustifyContent
  display?: Display
  flexDirection?: FlexDirection | Array<FlexDirection>
  flexGrow?: number
  spacingX?: Spacings
  spacingY?: Spacings
  className?: string
  fullWidth?: boolean
}

const useStyles = makeStyles(({ spacings }: Theme) => ({
  flexClass: ({
    display,
    justifyContent,
    alignItems,
    flexDirection,
    flexGrow,
    spacingX,
    spacingY,
    fullWidth,
  }: Props) => ({
    '& > *': {
      marginRight: spacings[spacingX!],
      marginBottom: spacings[spacingY!],
    },
    '& > *:last-child': {
      marginRight: spacings.none,
      marginBottom: spacings.none,
    },
    width: fullWidth ? '100%' : 'auto',
    ...responsiveProp('flexGrow', flexGrow),
    ...responsiveProp('display', display),
    ...responsiveProp('justifyContent', justifyContent),
    ...responsiveProp('alignItems', alignItems),
    ...responsiveProp('flexDirection', flexDirection),
  }),
}))

const Flex: React.FC<Props> = ({ children, className, ...props }) => {
  const classes = useStyles(props)
  return <div className={classNames(className, classes.flexClass)}>{children}</div>
}

Flex.defaultProps = {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  display: 'flex',
  flexGrow: 0,
  flexDirection: 'row',
  spacingX: 'none',
  spacingY: 'none',
  fullWidth: false,
}

export default Flex
