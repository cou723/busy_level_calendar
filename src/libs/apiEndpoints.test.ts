import { describe, expect, it } from 'vitest';
import apiEndpoints from './apiEndpoints';

describe('apiEndpoints', () => {
  it('should have the correct calendar endpoints', () => {
    expect(apiEndpoints.calendar.get).toBe('/api/calendar');
  });

  it('should have the correct schedule endpoints', () => {
    expect(apiEndpoints.schedule.create).toBe('/api/schedule');
    expect(apiEndpoints.schedule.update).toBe('/api/schedule/:id');
    expect(apiEndpoints.schedule.getAll).toBe('/api/schedules');
    expect(apiEndpoints.schedule.get).toBe('/api/schedule/:id');
    expect(apiEndpoints.schedule.delete).toBe('/api/schedule/:id');
  });

  it('should have the correct import endpoints', () => {
    expect(apiEndpoints.import.fromGoogleCalendar).toBe('/api/import');
    expect(apiEndpoints.import.fromTodoist).toBe('/api/import/todoist');
  });

  it('should have the correct auth endpoints', () => {
    expect(apiEndpoints.auth.login).toBe('/api/login');
    expect(apiEndpoints.auth.logout).toBe('/api/logout');
  });

  it('should have the correct user endpoints', () => {
    expect(apiEndpoints.user.create).toBe('/api/user');
    expect(apiEndpoints.user.update).toBe('/api/user/:id');
    expect(apiEndpoints.user.delete).toBe('/api/user/:id');
  });
});
