const apiEndpoints = {
  calendar: {
    get: "/calendar",
  },
  schedule: {
    createOrUpdate: "/schedule/:id",
    getAll: "/schedules",
    get: "/schedule/:id",
    delete: "/schedule/:id",
  },
  import: {
    fromGoogleCalendar: "/import",
    fromTodoist: "/import/todoist",
  },
  auth: {
    login: "/login",
    logout: "/logout",
  },
  user: {
    create: "/user",
    update: "/user/:id",
    delete: "/user/:id",
  },
};

export default apiEndpoints;
