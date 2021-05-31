const attachIncluded = (data, included = []) => {
    included.forEach((resource) => {
        data.forEach(x => {
            if (x.relationships[resource.type] !== undefined) {
                x.relationships[resource.type] = resource
            }
        })
    })

    return data
}

const httpClient = {
    async request(url, options) {
        const res = await fetch(url, options)
        const { data, included, errors } = await res.json()
        const dataIncluded = attachIncluded(data, included)

        return { data: dataIncluded, errors }
    }
}

export default httpClient