export const styles = (theme) => ({
  root: {
    extend: [
      theme.utils.flexbox.row,
      theme.utils.flexbox.ai_c,
      theme.utils.flexbox.jc_sb,
    ],
  },
  logo: {
    width: '70px',
    '& *': {
      fill: theme.colors.accent,
    },
  },
  logo_circle: {
    fill: theme.colors.basic,
  },
  paragraph: {
    marginTop: '2rem',
    fontSize: '24px',
  },
  title: {
    marginTop: '1rem',
    lineHeight: '1.2',
    '& span': {
      color: theme.colors.accent,
    },
  },
  button: {
    marginTop: '2rem',
  },
  left: {
    maxWidth: '500px',
  },
  right: {
    maxWidth: '500px',
  },
});
