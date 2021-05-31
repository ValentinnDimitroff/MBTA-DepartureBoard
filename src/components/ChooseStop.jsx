import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { apiRoutes, useGetAll } from '../api'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const ChooseStop = () => {
    // TODO - parse fields from options
    const classes = useStyles()
    const [value, setValue] = useState()

    const { data, loading, loaded, errors } = useGetAll(apiRoutes.stops, "/?fields[stop]=name&page[limit]=10") //filter[name]=Forest&
    console.log("response", data);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            {loading && <div>Loading</div>}
            {errors && <div>{errors.map(({ status, title, source, detail }) => (
                `${status} -> ${title || detail} -> param: ${source.parameter}`)
            )}</div>}

            <FormControl className={classes.formControl}>
                <InputLabel id="choose-stop-select-label">Choose Stop</InputLabel>
                <Select
                    labelId="choose-stop-select-label"
                    id="choose-stop-select"
                    value={value}
                    onChange={handleChange}
                >
                    {!loading && loaded && data.map(x => <MenuItem value={x.id}>{`${x.attributes.name}`}</MenuItem>)}
                </Select>
            </FormControl>
        </>
    )
}

ChooseStop.propTypes = {

}

export default ChooseStop
