import React from 'react';

import { getYear } from 'date-fns';

import type { Month } from '@/types/month';

import { getMonth } from '@/types/month';
import { getNext, getPrevious } from '@/types/yearMonth';

type State = {
  year: number;
  month: Month;
};

type Action = {
  type: 'next' | 'previous';
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'next':
      return getNext(state);
    case 'previous':
      return getPrevious(state);
  }
}

export const defaultState: State = {
  year: getYear(new Date()),
  month: getMonth(new Date()),
};

export function useYearMonth(initialState: State) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const next = React.useCallback(() => {
    dispatch({ type: 'next' });
  }, []);

  const previous = React.useCallback(() => {
    dispatch({ type: 'previous' });
  }, []);

  return {
    state,
    next,
    previous,
  };
}
