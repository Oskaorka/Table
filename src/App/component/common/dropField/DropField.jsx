import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DropField = ({
    arrayForItems,
    dropDescription,
    descr,
    setSelectedColumn,
    handleReset,
    stateReset
}) => {
    const [selectedItem, setSelectedItem] = useState("");

    const [showDrop, setShowDrop] = useState("");
    const toggleButton = () => {
        if (showDrop === "show") {
            return setShowDrop("");
        }
        return setShowDrop("show");
    };
    useEffect(() => {
        if (stateReset === "click") {
            setSelectedItem("");
        }
    }, [stateReset]);
    const handleClickItem = (e) => {
        setSelectedItem(e.name);
        // console.log(e);
        setSelectedColumn(e.iter);
        return setShowDrop("");
    };
    useEffect(() => {
        // handleReset(console.log("ooo"));
        // () => handleReset("s");
    }, [handleReset]);
    return (
        <div className="dropdown m-4">
            <div className="mb-4">
                {descr}: {selectedItem}
            </div>

            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                onClick={toggleButton}
            >
                {dropDescription}
            </button>
            <ul className={`dropdown-menu ${showDrop}`}>
                {Object.keys(arrayForItems).map((item) => {
                    return (
                        <li key={item}>
                            <button
                                role="button"
                                className="dropdown-item"
                                onClick={() =>
                                    handleClickItem(arrayForItems[item])
                                }
                            >
                                {arrayForItems[item].name}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
DropField.propTypes = {
    descr: PropTypes.string,
    dropDescription: PropTypes.string,
    stateReset: PropTypes.string,
    setSelectedColumn: PropTypes.func,
    handleReset: PropTypes.func,
    arrayForItems: PropTypes.object
};
export default DropField;
