import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import EmptyResults from './EmptyResults'
import ScheduleRow from './ScheduleRow'
import { departuresBoardScheduleSelector } from '../../../redux/departures-board'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const Schedule = () => {
    const classes = useStyles()
    const dataArr = useSelector(departuresBoardScheduleSelector)

    // TODO add a refresh button or refresh automatically

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="schedule-table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Time</TableCell>
                        <TableCell align="center">Destination</TableCell>
                        <TableCell align="center">Train #</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataArr && dataArr.length > 0 ? (
                        dataArr.map((x) => <ScheduleRow key={x.id} record={x} />)
                    ) : (
                        <EmptyResults />
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Schedule
