import React, { createContext, useEffect, useReducer } from "react";

export const initial = {
    credential: {
        email: "",
        password: ""
    }
};
// Reducer function for managing state
export function stateReducer(state, action) {
    switch (action.type) {
        case "CREDENTIAL":
            return { ...state, credential: { ...action.payload } };
        case "UPDATE_PASSWORD":
            return { ...state, credential: { password: action.payload } };
        default:
            return state;
    }
}

export const StoreContext = createContext();

export default function StoreProvider({ children }) {
    // Initialize state with values from localStorage or default values
    const [state, dispatch] = useReducer(stateReducer, {}, () => {
        const savedState = localStorage.getItem("store");
        return savedState ? JSON.parse(savedState) : initial
    });

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("store", JSON.stringify(state));
    }, [state]);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}
