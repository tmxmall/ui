import love from './icons/love.svg'
import earth from './icons/earth.svg'
import austria from './icons/austria.svg'
import brazil from './icons/brazil.svg'
import china from './icons/china.svg'
import nicaragua from './icons/nicaragua.svg'
import spain from './icons/spain.svg'
import india from './icons/india.svg'
import pakistan from './icons/pakistan.svg'

import { IconType } from './FooterIcon'

function getIcon(icon: IconType) {
  switch (icon) {
    case 'love':
      return {
        title: 'with love',
        content: love,
      }
    case 'earth':
      return {
        title: 'Earth',
        content: earth,
      }
    case 'austria':
      return {
        title: 'Austria',
        content: austria,
      }
    case 'brazil':
      return {
        title: 'Brazil',
        content: brazil,
      }
    case 'china':
      return {
        title: 'China',
        content: china,
      }
    case 'india':
      return {
        title: 'India',
        content: india,
      }
    case 'nicaragua':
      return {
        title: 'Nicaragua',
        content: nicaragua,
      }
    case 'spain':
      return {
        title: 'Spain',
        content: spain,
      }
    case 'pakistan':
      return {
        title: 'Pakistan',
        content: pakistan,
      }
  }
}

export default getIcon
