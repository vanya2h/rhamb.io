export const styles = (theme) => ({
  head: {
    extend: [theme.utils.flexbox.col, theme.utils.flexbox.ai_c],
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    marginTop: '1rem',
  },
  annotation: {
    marginTop: '1rem',
  },
});
