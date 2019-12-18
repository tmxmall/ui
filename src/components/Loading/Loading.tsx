import React from 'react';

import Logo, { Size } from '../Logo';
import Spinner from '../Spinner';

import { Wrapper, Badge } from './styles';

const Loading: React.FC = () => (
  <Wrapper data-testid="loading">
    <Spinner />
  </Wrapper>
);

export default Loading;
