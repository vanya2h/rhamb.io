import chroma from 'chroma-js';

export const styles = (theme) => ({
  head: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  list: {
    margin: '3rem 0',
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_c],
    [`@media screen and (min-width: ${
      theme.breakpoints.gridRanges.desktop[0]
    }px)`]: {
      '& > *': {
        '&:nth-child(2n-1)': {
          transform: 'translateY(30px)',
        },
      },
    },
  },
  bottom: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.jc_c],
  },
  button: {
    background: `rgba(${chroma(theme.colors.basic)
      .alpha(0.1)
      .rgba()})`,
  },
});
