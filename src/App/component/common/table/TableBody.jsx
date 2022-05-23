import React from "react";
import PropTypes from "prop-types";
const TableBody = ({ columns, data }) => {
    return (
        <>
            <tbody>
                {data.map((item) => {
                    return (
                        <tr key={item.id}>
                            {Object.keys(columns).map((column) => {
                                return <td key={column}>{item[column]}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
};
TableBody.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.object
};
export default TableBody;
