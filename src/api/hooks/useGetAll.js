import { createGetAllRoute } from "../api.routes"
import useFetch from "./useFetch"

export const useGetAll = (resource, filter) => {
    const url = createGetAllRoute(resource)
    const result = useFetch(`${url}${filter}`, {})

    return result
}
