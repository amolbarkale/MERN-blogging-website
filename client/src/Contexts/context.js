import { createContext, useReducer } from "react";
import reducer from "./Reducer";

const INTIT_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INTIT_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INTIT_STATE);
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
