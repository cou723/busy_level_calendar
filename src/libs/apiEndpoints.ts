const root = '/api';

const resources = {
  calendar: `${root}/calendar`,
  schedule: `${root}/schedule`,
  schedules: `${root}/schedules`,
  import: `${root}/import`,
  user: `${root}/user`,
} as const;

const apiEndpoints = {
  calendar: {
    get: resources.calendar,
  },
  schedule: {
    create: resources.schedule,
    update: `${resources.schedule}/:id`,
    getAll: resources.schedules,
    get: `${resources.schedule}/:id`,
    delete: `${resources.schedule}/:id`,
  },
  import: {
    fromGoogleCalendar: resources.import,
    fromTodoist: `${resources.import}/todoist`,
  },
  auth: {
    login: `${root}/login`,
    logout: `${root}/logout`,
  },
  user: {
    create: resources.user,
    update: `${resources.user}/:id`,
    delete: `${resources.user}/:id`,
  },
} as const;

export default apiEndpoints;
