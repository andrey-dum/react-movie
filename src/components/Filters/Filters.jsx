import React from 'react'
import Genres from './Genres'
import Pagination from './Pagination'
import PrimaryReleaseYear from './PrimaryReleaseYear'
import SortBy from './SortBy'

const Filters = ({
    filters: {sort_by, primary_release_year}, 
    changeFilterHandler, 
    onChangePage, 
    page, 
    total_pages,
    onChangeGenre
}) => {

    return (
        <form className="mb-3">
           
            <SortBy
                sort_by={sort_by}
                changeFilterHandler={changeFilterHandler}
            />
            <PrimaryReleaseYear
                primary_release_year={primary_release_year}
                changeFilterHandler={changeFilterHandler}
            />
            <Genres 
                // with_genres={with_genres}
                onChangeGenre={onChangeGenre}
            />

            <Pagination
                page={page}
                total_pages={total_pages}
                onChangePage={onChangePage}
            />

        </form>
    )
}

export default Filters