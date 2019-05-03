// @flow

export const onDocumentReady = (fn: Function): void => {
  if (document.readyState === 'complete') {
    fn();
  } else {
    window.addEventListener('load', fn);
  }
};
