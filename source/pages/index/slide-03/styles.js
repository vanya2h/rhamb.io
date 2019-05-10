export const styles = (theme) => ({
  head: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  list: {
    margin: '3rem 0',
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_sb],
    '& $item': {
      '&:nth-child(1)': {
        transform: 'translateY(30px)',
      },
      '&:nth-child(3)': {
        transform: 'translateY(30px)',
      },
    },
  },
  item: {
    marginTop: '0',
  },
  bottom: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_c],
  },
});
