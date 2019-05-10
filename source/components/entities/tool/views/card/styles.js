export const styles = (theme) => ({
  root: {
    minWidth: '240px',
    maxWidth: '240px',
    background: theme.colors.basic,
    borderRadius: '14px',
    transition: '.2s all ease-in-out',
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.04)',
    padding: '1.2rem',
    '&:hover': {
      boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.06)',
    },
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
    color: theme.colors.accent,
    marginRight: '5px',
  },
  text: {
    fontSize: '0.95rem',
  },
  category: {
    cursor: 'pointer',
  },
  title: {
    cursor: 'pointer',
  },
});
