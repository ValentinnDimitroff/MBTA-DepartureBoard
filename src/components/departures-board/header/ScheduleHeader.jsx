import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ChooseStop from './ChooseStop'
import CurrentDate from './CurrentDate'
import CurrentTime from './CurrentTime'

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-around',
    },
}))

const ScheduleHeader = () => {
    const classes = useStyles()

    return (
        <div className={classes.header}>
            <CurrentDate />
            <ChooseStop />
            <CurrentTime />
        </div>
    )
}

export default ScheduleHeader
