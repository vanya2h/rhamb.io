export const styles = (theme) => ({
  root: {
    extend: [
      theme.utils.flexbox.row,
      theme.utils.flexbox.jc_sb,
      theme.utils.flexbox.ai_c,
      theme.utils.flexbox.wrap,
    ],
  },
  left: {
    width: '40%',
    paddingRight: '1rem',
  },
  right: {
    width: '60%',
    paddingLeft: '1rem',
    minWidth: '600px',
  },
  steps: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    marginBottom: '1rem',
  },
  step: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
  },
  icon: {
    marginRight: '0.5rem',
  },
  arrow: {
    margin: '0 1rem',
  },
  button: {
    marginTop: '2rem',
  },
});
