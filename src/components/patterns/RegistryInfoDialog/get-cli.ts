function getCLI(
  type: 'config' | 'registry' | 'password',
  command: string,
  registryUrl: string,
  scope?: string,
): string {
  switch (type) {
    case 'config':
      return `${command} set ${scope} registry ${registryUrl}`
    case 'registry':
      return `${command} --registry ${registryUrl}`
    case 'password':
      return `${command} profile set password --registry ${registryUrl}`
  }
}

export default getCLI
