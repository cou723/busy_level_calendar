import { describe, it, expect } from 'vitest';
import { getCalendarDates } from './getCalendarDates';
import { format } from 'date-fns';

describe('getCalendarDates', () => {
  it('一般的なテスト', () => {
    const dates = getCalendarDates({ year: 2023, month: 12 });
    expect(dates.length).toBe(42);
    expect(format(dates[0], 'yyyy-MM-dd')).toBe('2023-11-26');
    expect(format(dates[dates.length - 1], 'yyyy-MM-dd')).toBe('2024-01-06');
  });

  it('うるう年', () => {
    const dates = getCalendarDates({ year: 2024, month: 2 });
    expect(dates.length).toBe(35); // 5 weeks
    expect(format(dates[0], 'yyyy-MM-dd')).toBe('2024-01-28');
    expect(format(dates[dates.length - 1], 'yyyy-MM-dd')).toBe('2024-03-02');
  });

  // 他のテストケース...
});
