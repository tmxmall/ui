import { render } from '@testing-library/react';
import React from 'react';

import ThemeProvider from '../design-tokens/ThemeProvider';

const customRender = (node: React.ReactElement<any>, ...options: Array<any>) => {
  return render(<ThemeProvider>{node}</ThemeProvider>, ...options);
};

export * from '@testing-library/react';
export { customRender as render };
