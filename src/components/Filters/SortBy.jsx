import React from 'react'
import PropTypes from 'prop-types'

const options = [
    {value: 'popularity.desc', label: 'Популярное по убыванию'},
    {value: 'popularity.asc', label: 'Популярное по возростанию'},
    {value: 'vote_average.desc', label: 'Рейтинг по убыванию'},
    {value: 'vote_average.asc', label: 'Рейтинг по возростанию'},
]

export default function SortBy({sort_by, changeFilterHandler}) {
    return (
        <div className="form-group">
            <label htmlFor="sort_by">Сортировать по:</label>
            <select 
                className="form-control" 
                id="sort_by" 
                name="sort_by"
                value={sort_by}
                onChange={changeFilterHandler}
            >
                {options.map(optn => (
                    <option
                        key={optn.value}
                        value={optn.value}
                    >{optn.label}</option>
                ))}
                {/* <option value="popularity.desc">Популярное по убыванию</option>
                <option value="popularity.asc">Популярное по возростанию</option>
                <option value="vote_average.desc">Рейтинг по убыванию</option>
                <option value="vote_average.desc">Рейтинг по возростанию</option> */}
            </select>
        </div>
    )
}


SortBy.propTypes = {
    sort_by: PropTypes.string.isRequired,
    changeFilterHandler: PropTypes.func.isRequired
}