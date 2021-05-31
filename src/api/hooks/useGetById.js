import apiRoutes from "../api.routes"
import useFetch from "./useFetch"

export const useGetById = (id, resource, options) => {
    const result = useFetch( `${apiRoutes[resource]}/${id}`, options)

    return result
}