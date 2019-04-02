import React from 'react'

import RegistryInfoTabContent from './RegistryInfoTabContent'
import RegistryInfoTabs from './RegistryInfoTabs'

export enum NODE_MANAGER {
  NPM = 'npm',
  YARN = 'yarn',
  PNPM = 'pnpm',
}

interface Props {
  scope: string
  registryUrl: string
}

const RegistryInfoContent: React.FC<Props> = ({ scope, registryUrl }) => {
  const [tabPosition, setTabPosition] = React.useState(0)

  // @ts-ignore
  const handleChange = (event: React.ChangeEvent<HTMLElement>, value: number) => {
    setTabPosition(value)
  }

  return (
    <>
      <RegistryInfoTabs onChange={handleChange} tabPosition={tabPosition} />
      <RegistryInfoTabContent scope={scope} registryUrl={registryUrl} tabPosition={tabPosition} />
    </>
  )
}

export default RegistryInfoContent
