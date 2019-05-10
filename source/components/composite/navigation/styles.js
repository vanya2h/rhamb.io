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
    borderRadius: '10px',
    borderColor: 'transparent',
    background: '#F2F2F2',
    padding: '5px 13px',
    '&:focus, &:active': {
      borderColor: 'transparent',
      background: '#e8e8e8',
    },
  },
  signup: {
    color: theme.colors.accent,
    fontWeight: '800',
    '& li': {
      extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    },
    '& $icon': {
      marginLeft: '5px',
    },
  },
  icon: {},
});
