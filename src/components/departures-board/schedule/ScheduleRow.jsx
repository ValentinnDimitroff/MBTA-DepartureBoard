/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

const useRowStyles = makeStyles((theme) => ({
    dot: {
        backgroundColor: (props) => `#${props.color}`,
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: theme.spacing(1),
    },
}))

const ScheduleRow = React.memo(({ record }) => {
    const {
        attributes: { departure_time, direction_id },
        relationships: {
            route: {
                attributes: { color, description, fare_class, direction_destinations },
            },
        },
    } = record

    const classes = useRowStyles({ color })

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <span className={classes.dot} />
                {description}
            </TableCell>
            <TableCell align="right" style={{ width: 160 }}>
                {new Date(departure_time).toLocaleTimeString('en-US')}
            </TableCell>
            <TableCell align="center">{direction_destinations[direction_id]}</TableCell>
            <TableCell align="right" />
            <TableCell align="right" />
            <TableCell align="right" />
            <TableCell component="th" scope="row">
                {fare_class}
            </TableCell>
        </TableRow>
    )
})

export default ScheduleRow
