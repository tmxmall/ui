import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { NODE_MANAGER } from './RegistryInfoContent'

interface Props {
  onChange: (event: React.ChangeEvent<HTMLElement>, value: number) => void
  tabPosition: keyof NODE_MANAGER.NPM
}

const RegistryInfoTabs: React.FC<Props> = ({ onChange, tabPosition }) => (
  // @ts-ignore
  // onChange type is not correct
  <Tabs value={tabPosition} onChange={onChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
    <Tab label={NODE_MANAGER.NPM} />
    <Tab label={NODE_MANAGER.PNPM} />
    <Tab label={NODE_MANAGER.YARN} />
  </Tabs>
)

export default RegistryInfoTabs
