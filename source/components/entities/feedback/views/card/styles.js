export const styles = (theme) => ({
  root: {
    background: 'transparent',
    maxWidth: '350px',
    width: '350px',
    padding: '0 1.5rem',
  },
  image: {
    '& img': {
      borderRadius: '100%',
    },
  },
  head: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    marginBottom: '1rem',
  },
  title: {
    marginLeft: '1rem',
  },
});
