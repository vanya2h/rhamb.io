import chroma from 'chroma-js';

export const styles = (theme) => ({
  root: {
    background: theme.colors.contrast_maximum,
    color: theme.colors.basic,
    transition: '.2s all ease-in-out',
    boxShadow: `0 20px 20px rgba(${chroma(theme.colors.contrast)
      .alpha(0.2)
      .rgba()})`,
    textAlign: 'center',
    padding: '1.2rem',
    borderRadius: '18px',
    '&:hover': {
      boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.06)',
    },
    [`@media screen and ${theme.breakpoints.desktop}`]: {
      textAlign: 'left',
    },
  },
  row: {
    marginBottom: '0',
  },
  image: {
    textAlign: 'center',
    extend: [theme.utils.flexbox.col, theme.utils.flexbox.jc_fs],
    '& img': {
      maxWidth: '130px',
      margin: 'auto',
      marginBottom: '1rem',
    },
  },
  'head-menu': {
    display: 'inline-flex',
    margin: 'auto',
  },
  'head-item': {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
  },
  'head-icon': {
    marginRight: '0.5rem',
  },
  content: {
    margin: 'auto',
    marginTop: '1rem',
    maxWidth: '270px',
    [`@media screen and ${theme.breakpoints.tablet}`]: {
      maxWidth: 'auto',
      marginLeft: '0',
    },
  },
  title: {
    marginBottom: '0.5rem',
    fontSize: '1.05rem',
    [`@media screen and ${theme.breakpoints.desktop}`]: {
      fontSize: '1.1rem',
    },
  },
  'title-link': {
    color: theme.colors.basic,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'none',
      color: `rgba(${chroma(theme.colors.basic)
        .darken(1)
        .rgba()})`,
    },
  },
  button: {
    marginTop: '2rem',
    margin: 'auto',
    background: `rgba(${chroma(theme.colors.basic)
      .alpha(0.1)
      .rgba()}) !important`,
    color: `${theme.colors.basic}!important`,
    [`@media screen and ${theme.breakpoints.desktop}`]: {
      marginTop: '2rem',
      marginLeft: '0',
    },
  },
});
