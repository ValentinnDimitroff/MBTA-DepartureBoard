import React from 'react'
import httpClient from '../httpClient'

const useFetch = (url, options) => {
    const [data, setData] = React.useState(null)
    const [errors, setErrors] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const { data, errors } = await httpClient.request(url, options)

                if (data) {
                    setData(data)
                    setLoading(false)
                    setLoaded(true)
                }

                if (errors) {
                    setErrors(errors)
                }
            } catch (error) {
                setErrors(error)
            }
        }

        fetchData()
    }, [])

    return { data, errors, loading, loaded }
}

export default useFetch
