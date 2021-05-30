import React from 'react'
import PropTypes from 'prop-types'
import ChooseStop from './ChooseStop'

const DeparturesBoard = props => {
    return (
        <div>
            <ChooseStop />
            <div>List departures by stop</div>
        </div>
    )
}

DeparturesBoard.propTypes = {

}

export default DeparturesBoard
