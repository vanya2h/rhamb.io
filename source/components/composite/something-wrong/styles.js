export const styles = (theme) => ({
  root: {
    extend: [theme.utils.flexbox.col, theme.utils.flexbox.ai_c],
    maxWidth: '400px',
    textAlign: 'center',
    margin: 'auto',
  },
  content: {
    marginTop: '1rem',
  },
});
