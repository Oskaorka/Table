import React, { useContext, useEffect, useState } from "react";
import getData from "../service/getData";
import PropTypes from "prop-types";

const DataContext = React.createContext();
export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [isLoading, setLoading] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        getDatas();
    }, []);
    async function getDatas() {
        try {
            const content = await getData.get();
            setData(Object.values(content));
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <DataContext.Provider value={{ data, isLoading }}>
            {isLoading ? children : "loading"}
        </DataContext.Provider>
    );
};
DataProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
