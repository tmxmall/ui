import React from 'react'

import Austria from './icons/Austria'
import Brazil from './icons/Brazil'
import China from './icons/China'
import Earth from './icons/Earth'
import India from './icons/India'
import Spain from './icons/Spain'
import Verdaccio from './icons/Verdaccio'
import Pakistan from './icons/Pakistan'
import Nicaragua from './icons/Nicaragua'
import License from './icons/License'

const icons = {
  austria: <Austria />,
  brazil: <Brazil />,
  china: <China />,
  earth: <Earth />,
  india: <India />,
  spain: <Spain />,
  nicaragua: <Nicaragua />,
  verdaccio: <Verdaccio />,
  pakistan: <Pakistan />,
  license: <License />,
}

type Icon = keyof typeof icons

interface Props {
  icon: Icon
}

const Icon: React.FC<Props> = ({ icon }) => icons[icon]

export default Icon
