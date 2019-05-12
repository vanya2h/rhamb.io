// @flow

import { UnstyledButtonRaw } from './raw';
import withStyles from 'react-jss';
import { styles } from './styles';

export const UnstyledButton = withStyles(styles)(UnstyledButtonRaw);
