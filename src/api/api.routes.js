// Extract to env file 
const API_BASE = 'https://api-v3.mbta.com'

export const createGetAllRoute = (resourceName) => `${API_BASE}/${resourceName}`
export const createGetByIdRoute = (id, resourceName) => `${API_BASE}/${resourceName}/${id}`

const apiRoutes = {
    stops: "stops",
}

export default apiRoutes;