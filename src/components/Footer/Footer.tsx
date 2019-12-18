import React from 'react';

import { goToTmxmallWebsite } from '../../utils/windows';

import { Wrapper, Left, Right, Earth, Flags, Love, Flag, Logo, Inner, ToolTip } from './styles';

const renderTooltip = (): JSX.Element => (
  <ToolTip>
    <Earth name="earth" size="md" />
    <Flags>
      <Flag name="spain" size="md" />
      <Flag name="nicaragua" size="md" />
      <Flag name="india" size="md" />
      <Flag name="brazil" size="md" />
      <Flag name="china" size="md" />
      <Flag name="austria" size="md" />
    </Flags>
  </ToolTip>
);
const POWERED_LABEL = 'Powered by';
const MADEWITH_LABEL = ' Made with';
const ON_LABEL = 'on';
const HEARTH_EMOJI = '♥';

const renderRight = (version = window.VERDACCIO_VERSION): JSX.Element => {
  return (
    <Right onClick={goToTmxmallWebsite}>
      {POWERED_LABEL} Tmxmall {`/ ${version}`} {renderTooltip()}
    </Right>
  );
};

const renderLeft = (): JSX.Element => (
  <Left>
    {MADEWITH_LABEL}
    <Love>{HEARTH_EMOJI}</Love>
    {ON_LABEL}
    {renderTooltip()}
  </Left>
);

const Footer: React.FC = () => (
  <Wrapper>
    <Inner>
    </Inner>
  </Wrapper>
);

export default Footer;
