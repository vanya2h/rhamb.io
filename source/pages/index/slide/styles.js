export const styles = (theme) => ({
  root: {
    overflow: 'hidden',
  },
  root_black: {
    color: theme.colors.basic,
    background: theme.colors.contrast_maximum,
  },
  root_grey: {
    background: '#eee',
  },
  root_full: {
    minHeight: '80vh',
    extend: [
      theme.utils.flexbox.row,
      theme.utils.flexbox.ai_c,
      theme.utils.flexbox.jc_c,
    ],
  },
  inner: {
    margin: '3.5rem 0',
  },
});
