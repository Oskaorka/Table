import React from "react";
import PropTypes from "prop-types";
import DropField from "../dropField/DropField";
import FormField from "../form/Form";
const FilterGroup = ({
    columns,
    conditions,
    setSelectedColumn,
    setCondition,
    setValue,
    value,
    handleReset,
    selectedItem,
    setSelectedItem,
    stateReset
}) => {
    const handleChange = ({ target }) => {
        setValue(target.value);
    };

    return (
        <div className="d-flex justify-content-center m-4">
            <DropField
                descr="Колонка"
                arrayForItems={columns}
                dropDescription="Выбор колонки"
                setSelectedColumn={setSelectedColumn}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                handleReset={handleReset}
                stateReset={stateReset}
            />
            <DropField
                descr="по условию"
                arrayForItems={conditions}
                dropDescription="Выбор условий"
                setSelectedColumn={setCondition}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                stateReset={stateReset}
            />
            <FormField onChange={handleChange} value={value} descr="поиск" />
            <div style={{ display: "flex", alignItems: "end" }}>
                <button
                    type="button"
                    className="btn btn-secondary my-4"
                    onClick={handleReset}
                    style={{ height: "3em", alignItems: "end" }}
                >
                    сброс
                </button>
            </div>
        </div>
    );
};
FilterGroup.propTypes = {
    columns: PropTypes.object,
    setSelectedColumn: PropTypes.func,
    setCondition: PropTypes.func,
    value: PropTypes.string,
    setValue: PropTypes.func,
    handleReset: PropTypes.func,
    selectedItem: PropTypes.string,
    stateReset: PropTypes.string,
    setSelectedItem: PropTypes.func,
    conditions: PropTypes.object
};
export default FilterGroup;
