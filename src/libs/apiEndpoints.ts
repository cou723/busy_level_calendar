const apiRoot = '/api';
const apiEndpoints = {
  calendar: {
    get: `${apiRoot}/calendar`,
  },
  schedule: {
    create: `${apiRoot}/schedule/`,
    update: `${apiRoot}/schedule/:id`,
    getAll: `${apiRoot}/schedules`,
    get: `${apiRoot}/schedule/:id`,
    delete: `${apiRoot}/schedule/:id`,
  },
  import: {
    fromGoogleCalendar: `${apiRoot}/import`,
    fromTodoist: `${apiRoot}/import/todoist`,
  },
  auth: {
    login: `${apiRoot}/login`,
    logout: `${apiRoot}/logout`,
  },
  user: {
    create: `${apiRoot}/user`,
    update: `${apiRoot}/user/:id`,
    delete: `${apiRoot}/user/:id`,
  },
} as const;

export default apiEndpoints;
