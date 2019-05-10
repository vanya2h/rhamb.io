export const styles = (theme) => ({
  head: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  list: {
    margin: '4rem 0',
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_sb],
  },
  bottom: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_c],
  },
});
