export const styles = (theme) => ({
  root: {
    background: 'transparent',
    maxWidth: '100%',
    margin: '0 auto',
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

  [`@media screen and (max-width: ${
    theme.breakpoints.gridRanges.desktop[0]
  }px)`]: {
    root: {
      textAlign: 'center',
    },
    head: {
      extend: [theme.utils.flexbox.col, theme.utils.flexbox.jc_c],
    },
  },
});
