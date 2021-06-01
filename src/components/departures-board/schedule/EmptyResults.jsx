import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

const EmptyResult = withStyles((theme) => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}))(({ classes }) => (
    <TableRow>
        <TableCell classes={classes} colSpan={6} align="center">
            No results
        </TableCell>
    </TableRow>
))

export default EmptyResult
