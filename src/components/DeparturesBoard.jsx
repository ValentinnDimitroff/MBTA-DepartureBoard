import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ChooseStop from './ChooseStop'
import Schedule from './Schedule'

const useStyles = makeStyles({
    container: {
        margin: '0 auto',
        width: '1000px'
    }
});

const DeparturesBoard = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <span>Today - {(new Date()).toLocaleDateString()}</span>
            <input type="date" value={(new Date())} />
            <ChooseStop />
            <span>Current Time - {(new Date().toLocaleTimeString())}</span>
            <Schedule />
        </div>
    )
}

export default DeparturesBoard
