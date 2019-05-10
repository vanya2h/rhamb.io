export const styles = (theme) => ({
  head: {
    extend: [
      theme.utils.flexbox.col,
      theme.utils.flexbox.jc_c,
      theme.utils.flexbox.ai_c,
    ],
  },
  top: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_c],
    marginTop: '2rem',
  },
  bottom: {
    marginTop: '3rem',
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_sb],
  },
  'horizontal-list': {
    extend: [theme.utils.flexbox.row],
    flexWrap: 'nowrap',
  },
  content: {
    maxWidth: '530px',
  },
  left: {
    paddingRight: '3rem',
  },
  title: {
    lineHeight: '1.3',
  },
  description: {
    marginTop: '1.5rem',
  },
  buttons: {
    marginTop: '1.5rem',
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    '& > * + *': {
      marginLeft: '1rem',
    },
  },
});
