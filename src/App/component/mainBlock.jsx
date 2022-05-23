import React, { useState, useEffect } from "react";
import { useData } from "../hooks/useData";
import Table from "./common/table/Table";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import FilterGroup from "./common/FilterList/FilterList";
import _ from "lodash";

const MainBlock = () => {
    const columns = {
        date: { iter: "date", name: "Дата" },
        title: { iter: "title", name: "Название" },
        amount: { iter: "amount", name: "Количество" },
        distance: { iter: "distance", name: "Расстояние" }
    };
    const conditions = {
        equals: { iter: "equals", name: "равно" },
        contains: { iter: "contains", name: "содержит" },
        more: { iter: "more", name: "больше" },
        smoller: { iter: "smoller", name: "меньше" }
    };
    // These objects(columns & conditions) could also be received from the database
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedColumn, setSelectedColumn] = useState("");
    const [condition, setCondition] = useState("");
    const [filteredData, setFilteredData] = useState("");
    const [dataInputSearch, setDataInputSearch] = useState("");
    const [sortBy, setSortBy] = useState({ iter: "title", order: "asc" });
    const [stateReset, setReset] = useState("");

    const { data } = useData();
    const pageSize = 5;
    const handlePageChage = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    useEffect(() => {
        if (selectedColumn && condition && dataInputSearch) {
            const dataFilters = _.filter(data, function (item) {
                switch (condition) {
                    case "more":
                        return item[selectedColumn] > +dataInputSearch;
                    case "smoller":
                        return item[selectedColumn] < +dataInputSearch;
                    case "equals":
                        return item[selectedColumn] === +dataInputSearch;
                    case "contains":
                        return (
                            String(item[selectedColumn])
                                .toLowerCase()
                                .indexOf(dataInputSearch.toLowerCase()) !== -1
                        );
                }
            });
            return setFilteredData(dataFilters);
        }
    }, [selectedColumn, condition, dataInputSearch]);

    const dataMod = !filteredData ? data : filteredData;
    const count = dataMod.length;

    const sortesData = _.orderBy(dataMod, [sortBy.iter], [sortBy.order]);
    const dataCrop = paginate(sortesData, currentPage, pageSize);
    const handleReset = () => {
        setFilteredData("");
        setSelectedColumn("");
        setCondition("");
        setDataInputSearch("");
        setReset("click");
        if (stateReset === "click") {
            setReset("");
        }
    };
    const handleSort = (item) => {
        if (sortBy.iter === item) {
            setSortBy((prevState) => ({
                ...prevState,
                order: prevState.order === "asc" ? "desc" : "asc"
            }));
        } else {
            setSortBy({ iter: item, order: "asc" });
        }
    };
    return (
        <>
            <FilterGroup
                columns={columns}
                conditions={conditions}
                setSelectedColumn={setSelectedColumn}
                setCondition={setCondition}
                setValue={setDataInputSearch}
                value={dataInputSearch}
                handleReset={handleReset}
                stateReset={stateReset}
            />
            {count > 0 && (
                <Table data={dataCrop} columns={columns} onSort={handleSort} />
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChage}
                currentPage={currentPage}
            />
        </>
    );
};

export default MainBlock;
