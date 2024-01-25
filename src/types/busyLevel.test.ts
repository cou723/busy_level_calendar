import { describe, expect, it } from 'vitest';

import { generateBusyLevels, summarize } from './busyLevel';

import type { BusyLevel } from './busyLevel';
import type { Calendar } from '@/types/calendar';

import { calendarInit } from '@/types/calendar';
import { generate } from '@/types/schedule';

describe('generateBusyLevels', () => {
  it('empty schedules', () => {
    // Act
    const result: BusyLevel[] = generateBusyLevels(calendarInit());

    // Assert
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it('one schedule', () => {
    const calendar: Calendar = calendarInit();

    calendar.schedules.push(
      generate({
        title: 'test',
        requiredDays: 1,
        date: new Date('2021-01-01'),
      })
    );

    // Act
    const result: BusyLevel[] = generateBusyLevels(calendar);

    // Assert
    expect(result.length).toBe(1);
    expect(result[0]).toStrictEqual({ date: new Date('2021-01-01'), level: 1 });
  });

  it('スケジュール単体かつrequiredDaysが2以上', () => {
    const calendar: Calendar = calendarInit();

    calendar.schedules.push(
      generate({
        title: 'test',
        requiredDays: 3,
        date: new Date('2021-01-03'),
      })
    );

    // Act
    const result: BusyLevel[] = generateBusyLevels(calendar);

    // Assert
    expect(result.length).toBe(3);
    expect(result[0]).toStrictEqual({ date: new Date('2021-01-03'), level: 1 });
    expect(result[1]).toStrictEqual({
      date: new Date('2021-01-02'),
      level: 0.55,
    });
    expect(result[2]).toStrictEqual({ date: new Date('2021-01-01'), level: 0.1 });
  });

  it('複数スケジュール', () => {
    const calendar: Calendar = calendarInit();

    calendar.schedules.push(
      generate({
        title: 'test',
        requiredDays: 3,
        date: new Date('2021-01-03'),
      }),
      generate({
        title: 'test2',
        requiredDays: 3,
        date: new Date('2021-01-03'),
      })
    );

    // Act
    const result: BusyLevel[] = generateBusyLevels(calendar);

    // Assert
    expect(result.length).toBe(3);
    expect(result[0]).toStrictEqual({ date: new Date('2021-01-03'), level: 1 });
    expect(result[1]).toStrictEqual({
      date: new Date('2021-01-02'),
      level: 0.55,
    });
    expect(result[2]).toStrictEqual({ date: new Date('2021-01-01'), level: 0.1 });
  });
});

describe('summarize', () => {
  it('empty', () => {
    // Arrange
    const input: BusyLevel[] = [];

    // Act
    const result = summarize(input);

    // Assert
    expect(result.length).toBe(0);
  });

  it('one', () => {
    // Arrange
    const input: BusyLevel[] = [{ date: new Date('2021-01-01'), level: 1 }];

    // Act
    const result = summarize(input);

    // Assert
    expect(result.length).toBe(1);
    expect(result[0]).toStrictEqual({ date: new Date('2021-01-01'), level: 1 });
  });

  it('normal case', () => {
    // Arrange
    const input: BusyLevel[] = [
      { date: new Date('2021-01-01'), level: 1 },
      { date: new Date('2021-01-01'), level: 0.5 },
      { date: new Date('2021-01-02'), level: 0.5 },
    ];

    // Act
    const result = summarize(input);

    // Assert
    expect(result.length).toBe(2);
    expect(result[0]).toStrictEqual({
      date: new Date('2021-01-01'),
      level: 1.5,
    });
    expect(result[1]).toStrictEqual({
      date: new Date('2021-01-02'),
      level: 0.5,
    });
  });
});
