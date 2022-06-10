import React, { useContext, createContext, useReducer } from "react";

// Initialize the Context API
export const DataLayerContext = createContext();

// Create the DataLayer Provider, passing the values from the parent
// Component down to all children components

export const DataLayer = ({initialState, reducer, children}) =>(
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

// Create a client to consume the data passed from the Root component
export const useDataLayerValue = () => useContext(DataLayerContext);
