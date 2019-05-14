import chroma from 'chroma-js';

export const styles = (theme) => ({
  root: {
    background: theme.colors.basic,
    transition: '.2s all ease-in-out',
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.04)',
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
  'head-item': {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
  },
  'head-item_accent': {
    color: theme.colors.accent,
  },
  'head-icon': {
    marginRight: '0.5rem',
  },
  'head-link': {
    color: theme.colors.accent,
    '&:hover': {
      boxShadow: 'none',
      color: `rgba(${chroma(theme.colors.accent)
        .darken(1)
        .rgba()})`,
    },
  },
  content: {
    marginTop: '1rem',
  },
  'title-link': {
    color: theme.colors.contrast_maximum,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  link: {
    marginTop: '1rem',
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    display: 'flex-inline',
    '& span': {
      marginRight: '0.5rem',
    },
  },
});
