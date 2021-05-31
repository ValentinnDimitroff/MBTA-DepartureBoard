import apiRoutes from "../api.routes"
import useFetch from "./useFetch"

export const useGetAll = (resource, options) => {
    const result = useFetch(apiRoutes[resource], options)

    return result
}
