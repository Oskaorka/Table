import React from "react";
import PropTypes from "prop-types";
const FormField = ({ onChange, value, descr }) => {
    return (
        <div className="d-flex flex-column-reverse align-items-center m-4">
            <input
                className="p-1 br-5"
                type={"type"}
                name={"name"}
                value={value}
                onChange={onChange}
                placeholder={"ввод значений"}
            />
            <label className="mb-4" htmlFor={"name"}>
                {descr}: {value}
            </label>
        </div>
    );
};
FormField.propTypes = {
    onChange: PropTypes.func,
    descr: PropTypes.string,
    value: PropTypes.string
};
export default FormField;
