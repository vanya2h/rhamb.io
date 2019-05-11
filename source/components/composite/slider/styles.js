export const styles = (theme) => ({
  '@global': {
    '.slick-slide div': {
      outline: 'none !important',
    },
  },
  root: {
    position: 'relative',
    maxWidth: '100%',
  },
  arrow: {
    extend: [
      theme.utils.flexbox.row,
      theme.utils.flexbox.jc_c,
      theme.utils.flexbox.ai_c,
    ],
    zIndex: '90',
    position: 'absolute',
    top: '50%',
    marginTop: '-20px',
    borderRadius: '100%',
    width: '40px',
    height: '40px',
    background: 'black',
    color: 'white',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.13)',
    transition: '0.2s all ease-in-out',
    transformOrigin: 'center center',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  arrow_left: {
    left: '-46px',
  },
  arrow_right: {
    right: '-46px',
  },
});
