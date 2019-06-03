import chroma from 'chroma-js';

export const styles = (theme) => ({
  root: {
    textAlign: 'center',
    extend: [theme.utils.flexbox.jc_c],
    [`@media screen and ${theme.breakpoints.desktop}`]: {
      textAlign: 'left',
    },
  },
  description: {
    marginTop: '1.5rem',
  },
  steps: {
    marginTop: '2rem',
    maxWidth: '600px',
  },
  step: {
    extend: [
      theme.utils.flexbox.row,
      theme.utils.flexbox.ai_c,
      theme.utils.flexbox.jc_c,
    ],
    marginRight: '1.5rem',
    border: '1px solid #eee',
    background: '#eee',
    color: `rgba(${chroma(theme.colors.contrast_maximum)
      .alpha(0.5)
      .rgba()})`,
    padding: '0.5rem 1rem',
    width: '100%',
    borderRadius: '27px',
    fontSize: '0.83rem',
  },
  content: {
    marginLeft: '0',
  },
  icon: {
    marginRight: '1rem',
  },
  button: {
    marginTop: '2rem',
  },
  image: {
    maxWidth: '300px',
  },
});
