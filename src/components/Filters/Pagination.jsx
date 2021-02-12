import React from 'react'

export default function Pagination({page, onChangePage}) {
    return (
        <>
            <div className="btn-group">
                    <button 
                        type="button" 
                        className="btn btn-light"
                        disabled={page === 1}
                        onClick={() => onChangePage(page - 1)}
                    >Назад</button>
                    <button 
                        type="button" 
                        className="btn btn-light" 
                        onClick={() => onChangePage(page + 1)}
                    >Вперед</button>
                </div>
                <div className="text-center mt-3">
                    Страница: {page}
                </div>
            </>
    )
}
