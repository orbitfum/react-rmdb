import React from 'react'
import PropTypes from 'prop-types'
import {StyledSpinner} from '../styles/StyledSpinner'

const Spinner = ({button = false}) => (
    <StyledSpinner button/>
)

Spinner.propTypes = {
    button: PropTypes.bool
}

export default Spinner;