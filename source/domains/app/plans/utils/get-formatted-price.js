// @flow

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 1,
  currencyDisplay: 'symbol',
});

export const getFormattedPrice = (price: number): string => {
  if (price === 0) {
    return 'free';
  }

  return formatter.format(price);
};
