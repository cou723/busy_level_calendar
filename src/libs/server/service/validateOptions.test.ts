import { describe, it, expect } from 'vitest';

import { validateOptions } from './validateOptions';

import type { ImportEventOptions } from '@/types/importEventOptions';

describe('validateOptions', () => {
  it('should return true if all options are valid', () => {
    const options: ImportEventOptions = {
      range: { start: new Date('2022-01-01'), end: new Date('2022-01-31') },
      calendars: ['primary'],
      onlyAllDay: false,
    };

    const result = validateOptions(options);

    expect(result.ok).toBe(true);
  });

  it('should return false if range.end is before range.start', () => {
    const options: ImportEventOptions = {
      range: { start: new Date('2022-01-31'), end: new Date('2022-01-01') },
      calendars: ['primary'],
      onlyAllDay: false,
    };

    const result = validateOptions(options);

    expect(result.ok).toBe(false);
  });

  it('should return false if calendar is zero in calendar', () => {
    const options: ImportEventOptions = {
      range: { start: new Date('2022-01-01'), end: new Date('2022-01-31') },
      calendars: [],
      onlyAllDay: false,
    };

    const result = validateOptions(options);

    expect(result.ok).toBe(false);
  });
});
