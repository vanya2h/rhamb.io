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
    width: '65%',
    paddingRight: '1rem',
  },
  right: {
    width: '35%',
    paddingLeft: '1rem',
  },
  description: {
    marginTop: '0.5rem',
  },
  steps: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    margin: '2rem 0',
  },
  step: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    marginRight: '1.5rem',
    border: '1px solid #eee',
    padding: '0.5rem 1.5rem',
    borderRadius: '27px',
  },
  icon: {
    marginRight: '1rem',
  },
  button: {
    marginTop: '2rem',
  },
});
