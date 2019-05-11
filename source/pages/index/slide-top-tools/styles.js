export const styles = (theme) => ({
  head: {
    maxWidth: '600px',
    textAlign: 'center',
    margin: 'auto',
    marginBottom: '3rem',
  },
  left: {
    width: '50%',
    paddingRight: '3rem',
  },
  right: {
    width: '50%',
  },
  item: {
    margin: '2rem 0',
  },
  title: {
    lineHeight: '1.3',
    marginBottom: '0.5rem',
  },
  description: {
    marginTop: '1.5rem',
  },
  bottom: {
    marginTop: '3rem',
    extend: [
      theme.utils.flexbox.row,
      theme.utils.flexbox.jc_c,
      theme.utils.flexbox.ai_c,
    ],
  },
  buttons: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
  },
});
