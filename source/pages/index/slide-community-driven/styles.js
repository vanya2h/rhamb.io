export const styles = (theme) => ({
  root: {
    textAlign: 'center',
    extend: [theme.utils.flexbox.jc_c],
    [`@media screen and ${theme.breakpoints.desktop}`]: {
      textAlign: 'left',
    },
  },
  description: {
    marginTop: '0.5rem',
  },
  steps: {
    marginTop: '2rem',
  },
  step: {
    extend: [
      theme.utils.flexbox.row,
      theme.utils.flexbox.ai_c,
      theme.utils.flexbox.jc_c,
    ],
    marginRight: '1.5rem',
    border: '1px solid #eee',
    background: theme.colors.contrast_maximum,
    color: theme.colors.basic,
    padding: '0.5rem 1rem',
    width: '100%',
    borderRadius: '27px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '1rem',
  },
  button: {
    marginTop: '2rem',
  },
});
