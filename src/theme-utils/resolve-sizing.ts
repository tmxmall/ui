import { Sizing } from './theme'
import { Theme } from '@material-ui/core/styles'

const resolveSizing = (theme: Theme) => (
  sizings?: Sizing | Array<Sizing>,
): undefined | number | string | Array<number | string> => {
  if (!sizings) return undefined

  if (!Array.isArray(sizings)) {
    return theme.sizing[sizings]
  }

  return sizings.map(sizing => resolveSizing(theme)(sizing) as string)
}

export default resolveSizing
