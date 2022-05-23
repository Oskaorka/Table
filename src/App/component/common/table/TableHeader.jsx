import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ columns, onSort }) => {
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => {
                    return (
                        <th
                            role="button"
                            onClick={
                                columns[column].iter !== "date"
                                    ? () => onSort(columns[column].iter)
                                    : undefined
                            }
                            key={column}
                        >
                            {columns[column].name}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    columns: PropTypes.object,
    onSort: PropTypes.func
};
export default TableHeader;
