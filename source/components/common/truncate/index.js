// @flow

import * as React from 'react';
import TruncateModule from 'react-truncate';

type Props = {
  lines: number,
  ellipsis?: string | React.Node,
  children: string | React.Node,
  trimWhitespace?: boolean,
};

export const Truncate = (props: Props) => <TruncateModule {...props} />;
