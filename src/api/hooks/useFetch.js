import React from 'react'

const attachIncluded = (data, included = []) => {
    console.log('attach', { data, included });

    included.forEach((entity) => {
        data.forEach(x => {
            if (x.relationships[entity.type] !== undefined) {
                x.relationships[entity.type] = entity
            }
        })
    })

    return data
}

const useFetch = (url, options) => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url, options)
                const { data, included, errors } = await res.json()
                if (data) {
                    const dataIncluded = attachIncluded(data, included)
                    setData(dataIncluded)
                    setLoading(false)
                    setLoaded(true)
                }

                if (errors) {
                    setError(errors)
                }
            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    }, [])

    return { data, error, loading, loaded }
};

export default useFetch;