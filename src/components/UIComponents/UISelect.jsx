import React from 'react'
import PropTypes from 'prop-types'

function UISelect({id, name, value, labelText, onChangeHandler, children}) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{labelText}</label>
            <select
                id={id}
                name={name}
                className="form-control"
                value={value}
                onChange={onChangeHandler}
            >
                {children}
            </select>
        </div>
    )
}

export default UISelect

UISelect.propTypes = {
    name: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
}
