import React from 'react';
import ReactPaginate from "react-paginate";
import classes from './Pagination.module.scss'

const Pagination = ({onChangePage}) => {
    return (
        <ReactPaginate
            className={classes.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(e) => onChangePage(e.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={3}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;