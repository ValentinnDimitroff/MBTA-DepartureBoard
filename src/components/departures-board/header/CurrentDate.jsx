import React from 'react'

const getDayName = (locale = 'en-US', format = 'long') => {
    const date = new Date()

    return date.toLocaleDateString(locale, { weekday: format })
}

const CurrentDate = () => (
    <div>
        <div>{getDayName()}</div>
        <div>{new Date().toLocaleDateString()}</div>
    </div>
)

export default CurrentDate
