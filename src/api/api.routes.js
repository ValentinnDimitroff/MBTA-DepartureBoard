
// Extract to env file 
const API_BASE = 'https://api-v3.mbta.com'

const apiRoutes = {
    stops: `${API_BASE}/stops`,
    schedules: `${API_BASE}/schedules`,
}

export default apiRoutes