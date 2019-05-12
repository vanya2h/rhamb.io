import chroma from 'chroma-js';

export const styles = (theme) => ({
  root: {
    background: theme.colors.basic,
    transition: '.2s all ease-in-out',
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.04)',
    padding: '1.2rem',
    '&:hover': {
      boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.06)',
    },
  },
  head: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_sb],
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
    marginTop: '2rem',
  },
  'title-link': {
    color: theme.colors.contrast_maximum,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'none',
    },
  },
});
