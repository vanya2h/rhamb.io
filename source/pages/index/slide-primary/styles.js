export const styles = (theme) => ({
  row: {
    extend: [theme.utils.flexbox.ai_c],
    textAlign: 'center',
    [`@media screen and ${theme.breakpoints.tablet}`]: {
      textAlign: 'left',
    },
  },
  paragraph: {
    marginTop: '2rem',
  },
  title: {
    marginTop: '1rem',
    lineHeight: '1.2',
    '& span': {
      color: theme.colors.accent,
    },
  },
  actions: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_c],
    [`@media screen and ${theme.breakpoints.tablet}`]: {
      extend: [theme.utils.flexbox.jc_fs],
    },
  },
  button: {
    marginTop: '2rem',
  },
});
