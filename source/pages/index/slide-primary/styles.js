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
  footer: {
    display: 'flex',
    extend: [theme.utils.flexbox.jc_c],
  },
  'scroll-down': {
    margin: 'auto',
    opacity: '0.4',
  },
  'scroll-down-icon': {
    marginRight: '1rem',
    animation: '1.5s ease-in-out infinite top-bottom',
  },
  '@keyframes top-bottom': {
    '0%': {
      transform: 'translateY(-5px)',
    },
    '50%': {
      transform: 'translateY(5px)',
    },
    '100%': {
      transform: 'translateY(-5px)',
    },
  },
});
