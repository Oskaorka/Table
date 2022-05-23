import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1);
    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {pages.map((page) => {
                    return (
                        <li
                            key={"page_" + page}
                            className={
                                "page-item" +
                                (page === currentPage ? "active" : "")
                            }
                        >
                            <button
                                onClick={() => onPageChange(page)}
                                className="page-link"
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    itemsCount: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func
};
export default Pagination;
