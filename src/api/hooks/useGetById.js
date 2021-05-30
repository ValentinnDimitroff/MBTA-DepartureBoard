import { createGetByIdRoute } from "../api.routes"
import useFetch from "./useFetch"

export const useGetById = (id, resource, options) => {
    const url = createGetByIdRoute(id, resource)
    const result = useFetch(url, options)

    return result
}