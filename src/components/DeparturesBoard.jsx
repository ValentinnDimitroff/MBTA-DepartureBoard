import React from 'react'
import PropTypes from 'prop-types'
import ChooseStop from './ChooseStop'
import Schedule from './Schedule'

const DeparturesBoard = props => {
    return (
        <div>
            <input type="date" />
            <ChooseStop />
            <Schedule />
        </div>
    )
}

DeparturesBoard.propTypes = {

}

export default DeparturesBoard
