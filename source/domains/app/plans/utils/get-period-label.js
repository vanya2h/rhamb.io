// @flow

export const getPeriodLabel = (period: number) => {
  if (period === 0) {
    return 'forever';
  }
  const days = period / (1000 * 60 * 60 * 24);

  if (days < 30) {
    return `${days} days`;
  }

  const estimatedMonths = Math.round(days / 30);

  return `${
    estimatedMonths === 1 ? 'per month' : `per ${estimatedMonths} months`
  }`;
};
