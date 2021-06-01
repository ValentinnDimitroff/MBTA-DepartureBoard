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
                const { data: resData, errors: resErrors } = await httpClient.request(url, options)

                if (resData) {
                    setData(resData)
                    setLoading(false)
                    setLoaded(true)
                }

                if (resErrors) {
                    setErrors(resErrors)
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
