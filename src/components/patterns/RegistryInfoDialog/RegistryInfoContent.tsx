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
  const [tabPosition, setTabPosition] = React.useState(NODE_MANAGER.NPM)

  const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
    const manager = event.target.innerHTML.toUpperCase()
    setTabPosition(NODE_MANAGER[manager as keyof typeof NODE_MANAGER])
  }

  return (
    <>
      <RegistryInfoTabs onChange={handleChange} tabPosition={tabPosition} />
      <RegistryInfoTabContent scope={scope} registryUrl={registryUrl} type={NODE_MANAGER.NPM} />
    </>
  )
}

export default RegistryInfoContent
