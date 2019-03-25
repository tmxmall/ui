import { createMuiTheme } from '@material-ui/core/styles'

const colors = {
  primary: '#4b5e40',
  secondary: '#20232a',
  background: '#f5f5f5',
  blue: '#2196f3',
  red: '#e25555',
  white: '#ffffff',
  disabled: '#999999',
  divider: '#e3e3e3',
  text: '#3c3c3c',
}

export type Colors = keyof typeof colors

const spacing = 4

const spacings = {
  none: 0,
  byte: spacing,
  kilo: spacing * 2,
  mega: spacing * 3,
  giga: spacing * 4,
  tera: spacing * 5,
  peta: spacing * 6,
  exa: spacing * 7,
  zetta: spacing * 8,
}

export type Spacings = keyof typeof spacings

const sizing = {
  byte: spacing * 4,
}

export type Sizing = keyof typeof sizing

export const theme = createMuiTheme({
  colors,
  spacing,
  spacings,
  sizing,
})

export type Theme = keyof typeof theme

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    spacings: typeof spacings
    sizing: typeof sizing
    colors: typeof colors
  }

  interface ThemeOptions {
    spacings: typeof spacings
    sizing: typeof sizing
    colors: typeof colors
  }
}
