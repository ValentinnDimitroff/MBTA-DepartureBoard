import React from 'react'

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
                const { data, errors } = await res.json()
                if (data) {
                    setData(data)
                    setLoading(false)
                    setLoaded(true)
                }

                if(errors) {
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