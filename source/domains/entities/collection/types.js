// @flow

export const Complexity = 0 | 1 | 2;

export type Shape = {
  id: string,
  title: string,
  annotation: string,
  category: string,
  averageTime: number,
  complexity: Complexity,
};
