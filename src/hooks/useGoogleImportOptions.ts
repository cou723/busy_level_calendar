import { ImportEventOptions } from '@/types/importEventOptions';
import { useReducer } from 'react';

type Action =
  | { type: 'setCalendars'; value: string[] }
  | { type: 'onlyAllDay'; value: boolean }
  | { type: 'setStart'; value: Date }
  | { type: 'setEnd'; value: Date }
  | { type: 'setRange'; value: { start: Date; end: Date } };

function reducerFunc(state: ImportEventOptions, action: Action): ImportEventOptions {
  switch (action.type) {
    case 'setCalendars':
      return {
        ...state,
        calendars: action.value,
      };
    case 'onlyAllDay':
      return {
        ...state,
        onlyAllDay: action.value,
      };
    case 'setStart':
      return {
        ...state,
        range: {
          ...state.range,
          start: action.value,
        },
      };
    case 'setEnd':
      return {
        ...state,
        range: {
          ...state.range,
          end: action.value,
        },
      };
    case 'setRange':
      return {
        ...state,
        range: action.value,
      };
    default:
      throw new Error();
  }
}

export function useGoogleImportOptions(initialState: ImportEventOptions) {
  return useReducer(reducerFunc, initialState);
}
