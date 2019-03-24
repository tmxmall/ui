import verdaccio from './icons/verdaccio'
import license from './icons/license'

import { IconType } from './Icon'

function getIcon(icon: IconType) {
  switch (icon) {
    case 'verdaccio':
      return verdaccio
    case 'license':
      return license
  }
}

export default getIcon
