export const styles = (theme) => ({
  root: {
    overflow: 'hidden',
    padding: '1rem 0',
    borderBottom: '1px solid #eee',
    [`@media screen and ${theme.breakpoints.tablet}`]: {
      padding: '3.5rem 0',
      borderBottom: '0',
    },
  },
  root_black: {
    color: theme.colors.basic,
    background: theme.colors.contrast_maximum,
  },
  root_grey: {
    background: '#eee',
  },
  root_fullscreen: {
    minHeight: '100vh',
    extend: [theme.utils.flexbox.ai_c, theme.utils.flexbox.row],
  },
});
