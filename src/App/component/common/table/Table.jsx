import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import PropTypes from "prop-types";
const Table = ({ data, columns, onSort }) => {
    return (
        <table className="table table-hover">
            <TableHeader columns={columns} onSort={onSort} />
            <TableBody columns={columns} data={data} />
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.object,
    onSort: PropTypes.func
};
export default Table;
