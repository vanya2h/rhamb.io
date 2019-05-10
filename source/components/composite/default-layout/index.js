// @flow

import withStyles from 'react-jss';
import { styles } from './styles';
import { DefaultLayoutRaw } from './raw';

export const DefaultLayout = withStyles(styles)(DefaultLayoutRaw);
