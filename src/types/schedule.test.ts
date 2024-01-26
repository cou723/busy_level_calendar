import { describe, it, expect } from 'vitest';

import type { Schedule } from '@prisma/client';

import { getAllDatesUntilSchedule, generate, toSchedule, toSchedules } from '@/types/schedule';

describe('getAllDatesUntilSchedule', () => {
  it('should return an array of objects with the date and n days ago', () => {
    const schedule: Schedule = generate({
      title: 'Test Schedule',
      description: 'This is a test schedule',
      date: new Date('2022-01-01'),
      requiredDays: 5,
    });

    const result = getAllDatesUntilSchedule(schedule);

    expect(result).toEqual([
      new Date('2022-01-01'),
      new Date('2021-12-31'),
      new Date('2021-12-30'),
      new Date('2021-12-29'),
      new Date('2021-12-28'),
    ]);
  });

  it('should return an empty array if the requiredDays is not provided', () => {
    const schedule: Schedule = generate({
      title: 'Test Schedule',
      description: 'This is a test schedule',
      date: new Date('2022-01-01'),
      requiredDays: null,
    });

    const result = getAllDatesUntilSchedule(schedule);

    expect(result).toEqual([]);
  });
});

describe('convert from google event', () => {
  it('should return a schedule object', () => {
    const userId = '1';
    expect(
      toSchedule(
        {
          summary: 'Test Schedule',
          description: 'This is a test schedule',
          start: {
            date: '2022-01-01',
          },
        },
        userId
      ).val
    ).toEqual({
      title: 'Test Schedule',
      description: 'This is a test schedule',
      date: new Date('2022-01-01'),
      requiredDays: null,
      userId,
    });

    expect(
      toSchedule(
        {
          summary: 'Test Schedule',
          description: undefined,
          start: {
            date: '2022-01-01',
          },
        },
        userId
      ).val
    ).toEqual({
      title: 'Test Schedule',
      description: undefined,
      date: new Date('2022-01-01'),
      requiredDays: null,
      userId,
    });
  });

  it('should return a error object if the event.summary is invalid', () => {
    const userId = '1';
    expect(
      toSchedule(
        {
          summary: undefined,
          description: 'This is a test schedule',
          start: {
            date: '2022-01-01',
          },
        },
        userId
      ).val
    ).toEqual('Invalid event');
  });

  it('should return a error object if the event.start.date is invalid', () => {
    const userId = '1';
    expect(
      toSchedule(
        {
          summary: 'Test Schedule',
          description: 'This is a test schedule',
          start: {
            date: undefined,
          },
        },
        userId
      ).val
    ).toEqual('Invalid event');
  });

  it('should return a error object if the event.start.dateTime is invalid', () => {
    const userId = '1';
    expect(
      toSchedule(
        {
          summary: 'Test Schedule',
          description: 'This is a test schedule',
          start: {
            dateTime: undefined,
          },
        },
        userId
      ).val
    ).toEqual('Invalid event');
  });
});

describe('convert to schedules', () => {
  it('should skip error event', () => {
    const userId = '1';
    expect(
      toSchedules(
        [
          {
            summary: 'Test Schedule',
            description: 'This is a test schedule',
            start: {
              date: '2022-01-01',
            },
          },
          {
            summary: 'Error Schedule',
            description: 'This is a test schedule',
            start: {
              date: undefined,
            },
          },
        ],
        userId
      )
    ).toEqual([
      {
        title: 'Test Schedule',
        description: 'This is a test schedule',
        date: new Date('2022-01-01'),
        requiredDays: null,
        userId,
      },
    ]);
  });
});
