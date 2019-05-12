export const styles = (theme) => ({
  row: {
    extend: [
      theme.utils.flexbox.row,
      theme.utils.flexbox.jc_sb,
      theme.utils.flexbox.ai_c,
    ],
  },
  burger: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    fontSize: '1rem',
    [`@media screen and (max-width: 515px)`]: {
      fontSize: '1rem',
    },
  },
  menu: {
    extend: [theme.utils.flexbox.ai_c],
    flexWrap: 'nowrap',
  },
  logo: {
    fontWeight: 'bold',
  },
  search: {
    flexGrow: '1',
  },
  input: {
    borderColor: 'transparent',
    width: '250px',
    padding: '0 10px',
    height: 'auto',
    fontSize: '1.1rem',
    '&:focus, &:active': {
      borderColor: 'transparent',
    },
  },
  'search-input-wrapper': {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    '& $icon': {
      opacity: '.5',
    },
  },
  item: {
    opacity: '.7',
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    cursor: 'pointer',
    fontSize: '1.1rem',
    '&:hover': {
      opacity: '1',
    },
    [`@media screen and (max-width: 515px)`]: {
      fontSize: '1rem',
    },
  },
  signup: {
    color: theme.colors.accent,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '0.5rem',
  },
  dropdown: {
    marginTop: '0.5rem',
    display: 'block',
    [`@media screen and ${theme.breakpoints.mobile}`]: {
      display: 'none',
    },
  },
});
