import React from 'react'
import { default as MuiDialogTitle } from '@material-ui/core/DialogTitle'

import Heading from '../Heading'
import { HeadingProps } from '../Heading/Heading'

const DialogTitle: React.FC<Partial<HeadingProps>> = ({ children, ...props }) => (
  <MuiDialogTitle disableTypography>
    <Heading is="h2" {...props}>
      {children}
    </Heading>
  </MuiDialogTitle>
)

export default DialogTitle
