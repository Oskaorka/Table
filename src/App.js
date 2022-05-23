import React from "react";
import "./App.css";
import MainBlock from "./App/component/mainBlock";
import { DataProvider } from "./App/hooks/useData";

function App() {
    return (
        <>
            <DataProvider>
                <MainBlock />
            </DataProvider>
        </>
    );
}

export default App;
