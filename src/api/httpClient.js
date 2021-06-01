const sanitizeOptions = ({ filter, fields, include, perPage, ...restOptions }) => restOptions

const buildUrl = ({ baseUrl, filter, fields = [], include = [], perPage }) => {
    const queryParamsArr = []

    // Filter by fields
    if (filter) {
        Object.keys(filter)
            .map((key) => `filter[${key}]=${filter[key]}`)
            .forEach((x) => queryParamsArr.push(x))
    }

    // Include related resource's results
    if (include.length > 0) {
        queryParamsArr.push(`include=${include.join(',')}`)
    }

    // Include only set of fields
    if (fields.length > 0) {
        const resourceName = baseUrl.split('/')[3]
        const resourceSingular = resourceName.substring(0, resourceName.length - 1)

        queryParamsArr.push(`fields[${resourceSingular}]=${fields.join(',')}`)
    }

    // Page results limitation
    if (perPage) {
        queryParamsArr.push(`page[limit]=${perPage}`)
    }

    return `${baseUrl}${queryParamsArr.length > 0 && '/?'}${queryParamsArr.join('&')}`
}

const attachIncluded = (data, included = []) => {
    included.forEach((resource) => {
        data.forEach((x) => {
            if (x.relationships[resource.type] !== undefined) {
                x.relationships[resource.type] = resource
            }
        })
    })

    return data
}

const httpClient = {
    async request(baseUrl, options) {
        const url = buildUrl({ baseUrl, ...options })
        const httpOptions = sanitizeOptions(options)

        const res = await fetch(url, httpOptions)
        const { data, included, errors } = await res.json()
        const dataIncluded = attachIncluded(data, included)

        return { data: dataIncluded, errors }
    },
}

export default httpClient
