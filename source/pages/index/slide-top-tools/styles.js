export const styles = (theme) => ({
  root: {
    textAlign: 'center',
  },
  head: {
    marginBottom: '2rem',
  },
  item: {
    margin: '1rem 0',
    padding: '0.7rem',
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
      theme.utils.flexbox.col,
      theme.utils.flexbox.jc_c,
      theme.utils.flexbox.ai_c,
    ],
  },
  buttons: {
    marginTop: '2rem',
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    [`@media screen and (max-width: 395px)`]: {
      extend: [theme.utils.flexbox.col],
      '& > * + *': {
        marginTop: '1rem',
      },
    },
  },
});
