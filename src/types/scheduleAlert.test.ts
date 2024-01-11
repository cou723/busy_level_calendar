import { describe, expect, it } from 'vitest';

import { generate } from './schedule';
import { extractFromCalendar, extractFromSchedule } from './scheduleAlert';

import type { Schedule } from './schedule';

describe('fromCalendar', () => {
  it('should convert an array of schedules to an array of alerts', () => {
    const schedules: Schedule[] = [
      generate({
        title: 'Test Schedule 1',
        date: new Date(),
      }),
      generate({
        title: 'Test Schedule 2',
        date: new Date(),
        requiredDays: 1,
      }),
    ];

    const alerts = extractFromCalendar(schedules);
    expect(alerts.length).toBe(1);
  });
});

describe('fromSchedule', () => {
  it('should convert a schedule to a alert', () => {
    const schedule: Schedule = generate({
      title: 'Test Schedule',
      date: new Date(),
    });

    const alerts = extractFromSchedule(schedule);
    expect(typeof alerts.message).toBe('string');
  });
});
