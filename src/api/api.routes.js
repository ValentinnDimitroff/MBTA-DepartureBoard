const API_BASE = process.env.REACT_APP_API_PREFIX

const apiRoutes = {
    stops: `${API_BASE}/stops`,
    schedules: `${API_BASE}/schedules`,
}

export default apiRoutes
