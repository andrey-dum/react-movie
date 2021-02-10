import React from 'react'

const Filters = ({filters, changeFilterHandler}) => {
    return (
        <form className="mb-3">
            <div className="form-group">
                <label htmlFor="sort_by">Сортировать по:</label>
                <select 
                    className="form-control" 
                    id="sort_by" 
                    name="sort_by"
                    value={filters.sort_by}
                    onChange={changeFilterHandler}
                >
                    <option value="popularity.desc">Популярное по убыванию</option>
                    <option value="popularity.asc">Популярное по возростанию</option>
                    <option value="vote_average.desc">Рейтинг по убыванию</option>
                    <option value="vote_average.desc">Рейтинг по возростанию</option>
                </select>
            </div>

        </form>
    )
}

export default Filters