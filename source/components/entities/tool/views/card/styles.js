import chroma from 'chroma-js';

export const styles = (theme) => ({
  root: {
    textAlign: 'left',
    background: theme.colors.contrast_maximum,
    color: theme.colors.basic,
    borderRadius: '17px',
    transition: '.2s all ease-in-out',
    boxShadow: `0 10px 15px rgba(${chroma(theme.colors.contrast)
      .alpha(0.2)
      .rgba()})`,
    padding: '1.2rem',
    '&:hover': {
      boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.06)',
    },
  },
  annotation: {
    opacity: '0.7',
    marginTop: '0.5rem',
    fontSize: '1rem',
  },
  img: {
    marginBottom: '1rem',
    width: '50px',
    height: '50px',
    borderRadius: '8px',
    '& img': {
      width: '100%',
    },
  },
  bottom: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_sb],
    marginTop: '1rem',
  },
  pins: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
  },
  icon: {
    marginRight: '5px',
  },
  category: {
    cursor: 'pointer',
  },
  title: {
    cursor: 'pointer',
  },
});
