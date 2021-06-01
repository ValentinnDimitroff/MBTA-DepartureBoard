import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ScheduleHeader } from './header'
import Schedule from './schedule/Schedule'

const useStyles = makeStyles({
    container: {
        margin: '0 auto',
        width: '1000px',
    },
})

const DeparturesBoard = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <ScheduleHeader />
            <Schedule />
        </div>
    )
}

export default DeparturesBoard
