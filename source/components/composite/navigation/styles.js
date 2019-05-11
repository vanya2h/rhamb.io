export const styles = (theme) => ({
  root: {
    extend: [
      theme.utils.flexbox.row,
      theme.utils.flexbox.jc_sb,
      theme.utils.flexbox.ai_c,
    ],
  },
  menu: {
    extend: [theme.utils.flexbox.ai_c],
  },
  logo: {
    fontWeight: 'bold',
  },
  input: {
    flexGrow: '1',
  },
  search: {
    borderColor: 'transparent',
    background: '#F2F2F2',
    width: '250px',
    '&:focus, &:active': {
      borderColor: 'transparent',
      background: '#e8e8e8',
    },
  },
});
