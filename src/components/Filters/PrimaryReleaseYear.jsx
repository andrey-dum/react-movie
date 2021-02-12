import React from 'react'
import UISelect from '../UIComponents/UISelect'
import PropTypes from 'prop-types'

const options = [
    {label: '2021', value: '2021'},
    {label: '2020', value: '2020'},
    {label: '2019', value: '2019'},
    {label: '2018', value: '2018'},
    {label: '2017', value: '2017'},
    {label: '2016', value: '2016'},
    {label: '2015', value: '2015'},
]


export default function PrimaryReleaseYear({primary_release_year, changeFilterHandler}) {

    return (
        <UISelect
            id="primary_release_year"
            name="primary_release_year"
            value={primary_release_year}
            onChangeHandler={changeFilterHandler}
            labelText="Год релиза"
        >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}

            </UISelect>
    )
}


PrimaryReleaseYear.propTypes = {
    primary_release_year: PropTypes.string.isRequired,
    changeFilterHandler: PropTypes.func.isRequired,
}
