import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useGetAll } from '../api'
import { resources } from '../constants'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: 1000
    },
});

const useRowStyles = makeStyles(theme => ({
    dot: {
        backgroundColor: props => `#${props.color}`,
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: theme.spacing(1)
    }
}))

const ScheduleRow = ({ record }) => {
    const {
        attributes: {
            departure_time,
            direction_id
        },
        relationships: {
            route: {
                attributes: {
                    color,
                    description,
                    fare_class,
                    direction_destinations
                }
            }
        }
    } = record

    const classes = useRowStyles({ color })

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <span className={classes.dot}></span>
                {description}
            </TableCell>
            <TableCell align="right">{(new Date(departure_time)).toLocaleTimeString("en-US")}</TableCell>
            <TableCell align="center">{direction_destinations[direction_id]}</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell component="th" scope="row">{fare_class}</TableCell>
        </TableRow>
    )
}

const Schedule = props => {
    const classes = useStyles();
    const options = {
        filter: { stop: 9221 },


        fields: ["arrival_time", "departure_time"]
    }

    const { data, loading, loaded, error } = useGetAll(resources.schedules, { filter: { stop: "9221" }, include: ["route"] })
    //"/?filter[stop]=9221&include=route",
    console.log("loggog", data);
    // TODO refresh button

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="schedule-table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Carrier</TableCell>
                        <TableCell align="center">Time</TableCell>
                        <TableCell align="center">Destination</TableCell>
                        <TableCell align="center">Train #</TableCell>
                        <TableCell align="center">Track</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map(x => <ScheduleRow key={x.id} record={x} />)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

Schedule.propTypes = {

}

export default Schedule
