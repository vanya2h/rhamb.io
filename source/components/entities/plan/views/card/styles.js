import chroma from 'chroma-js';

export const styles = (theme) => ({
  root: {
    background: theme.colors.contrast_maximum,
    borderRadius: '28px',
    overflow: 'hidden',
    color: theme.colors.basic,
    boxShadow: `0 20px 20px rgba(${chroma(theme.colors.contrast)
      .alpha(0.2)
      .rgba()})`,
    padding: '20px',
    transition: '0.2s all ease-in-out',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: `0 30px 20px rgba(${chroma(theme.colors.contrast)
        .alpha(0.2)
        .rgba()})`,
    },
  },
  header: {
    textAlign: 'center',
  },
  'header-annotation': {
    opacity: '0.5',
  },
  price: {
    marginTop: '1rem',
    textAlign: 'center',
    '& span + span': {
      marginLeft: '0.5rem',
    },
  },
  'price-number': {
    color: theme.colors.accent,
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: '110%',
      left: '0',
      width: '100%',
      height: '2px',
      background: theme.colors.accent,
    },
  },
  attributes: {
    marginTop: '2rem',
    '& > * + *': {
      marginTop: '0.5rem',
    },
  },
  'attributes-item': {
    extend: [theme.utils.flexbox.row],
  },
  'attributes-icon': {
    marginRight: '1rem',
  },
  'button-wrapper': {
    marginTop: '1.5rem',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    fontSize: '18px',
    padding: '15px 0',
    height: 'auto',
    background: `rgba(${chroma(theme.colors.basic)
      .alpha(0.2)
      .rgba()})`,
  },
  'button-primary': {
    background: theme.colors.accent,
  },
});
