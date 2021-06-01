import React from 'react'

const CurrentTime = () => (
    <div>
        <div>Time</div>
        <div>{new Date().toLocaleTimeString()}</div>
    </div>
)

export default CurrentTime
