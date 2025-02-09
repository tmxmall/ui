import React, { Fragment } from 'react';

import { getRegistryURL } from '../../utils/url';
import CopyToClipBoard from '../CopyToClipBoard';
import Button from '../../muiComponents/Button';
import CardContent from '../../muiComponents/CardContent';
import { default as Typography } from '../../muiComponents/Heading';
import CardActions from '../../muiComponents/CardActions';
import Text from '../../muiComponents/Text';

import { CardStyled as Card, HelpTitle } from './styles';

export const HELP_TITLE = 'No Package Published Yet.';
export const COMPONENT_HELP_ID = 'help-card__title';

function renderHeadingClipboardSegments(title: string, text: string): React.ReactNode {
  return (
    <Fragment>
      <Text variant={'body1'}>{title}</Text>
      <CopyToClipBoard text={text} />
    </Fragment>
  );
}

const Help: React.FC = () => {
  const registryUrl = getRegistryURL();

  return (
    <Card id="help-card">
      <CardContent>
        <Typography component="h2" gutterBottom={true} id={COMPONENT_HELP_ID} variant="h5">
          {HELP_TITLE}
        </Typography>
        <HelpTitle color="textSecondary" gutterBottom={true}>
          {'To publish your first package just:'}
        </HelpTitle>
        {renderHeadingClipboardSegments('1. Login', `npm adduser --registry ${registryUrl}`)}
        {renderHeadingClipboardSegments('2. Publish', `npm publish --registry ${registryUrl}`)}
        <Text variant="body2">{'3. Refresh this page.'}</Text>
      </CardContent>
    </Card>
  );
};

export default Help;
