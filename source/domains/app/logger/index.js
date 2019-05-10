// @flow

export const logger = {
  logError: (error: Error) => {
    // eslint-disable-next-line
    console.error('AN ERROR OCCURED: ');
    // eslint-disable-next-line
    console.error(error);
  },
  logInfo: (label, ...rest) => {
    // eslint-disable-next-line
    console.log(`[${label.toUpperCase()}]`, ...rest);
  },
};
