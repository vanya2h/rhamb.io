// @flow

export const minutesToHumable = (originalMinutes: number): string => {
  const hours = Math.ceil(originalMinutes / 60);
  const minutes = originalMinutes % 60;

  return `${hours}h ${minutes}m`;
};
