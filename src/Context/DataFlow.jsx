import React, { createContext, useContext} from "react";

const DataFlowContext = createContext();

export const useDataFlowContext = () => useContext(DataFlowContext);

function DataFlowProvider({children}) {

    let firstName = "Arijit Pal"
    return (
        <DataFlowContext.Provider value={{ firstName }}>{children}</DataFlowContext.Provider>
    )
}

export default DataFlowProvider;