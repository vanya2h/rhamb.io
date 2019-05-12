// @flow

import type { Complexity } from '~/domains/entities/collection/types';

export const getComplexityIcon = (
  complexity: Complexity,
): 'Cloud' | 'CloudSnow' | 'CloudRain' => {
  switch (complexity) {
    case 0: {
      return 'Cloud';
    }
    case 1: {
      return 'CloudSnow';
    }
    case 2: {
      return 'CloudRain';
    }
    default: {
      return null;
    }
  }
};

export const getComplexityTitle = (complexity: Complexity): string => {
  switch (complexity) {
    case 0: {
      return 'For beginners';
    }
    case 1: {
      return 'Medium';
    }
    case 2: {
      return 'Advanced';
    }
    default: {
      return null;
    }
  }
};
