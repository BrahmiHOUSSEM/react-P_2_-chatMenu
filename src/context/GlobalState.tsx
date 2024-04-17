import { useReducer, createContext } from "react";

type stateType = {
  Messages: string;
  Reponses: string;
}[];

type reducerActionMessagesType = {
  type: "AddMsg";
  payload: { Messages: string; Reponses: string };
};
type reducerActionResetType = {
  type: "clear";
};

type reducerActionType = reducerActionResetType | reducerActionMessagesType;

type providerChildrensProps = {
  children: React.ReactNode;
};

type hundleMessage = (
  message: { Messages: string; Reponses: string },
  type: "AddMsg"
) => void;

type clearHistory = () => void;

type contextValueType = {
  globalState: stateType;
  hundleMessage: hundleMessage;
  clearHistory: clearHistory;
};

const initialState: stateType = [];

const AppReducer = (state: stateType, action: reducerActionType) => {
  switch (action.type) {
    case "AddMsg":
      return [...state, action.payload];

    case "clear":
      return initialState;

    default:
      return initialState;
  }
};

export const globalContext = createContext({} as contextValueType);

const ContextProvider = ({ children }: providerChildrensProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMessage: hundleMessage = (
    message: { Messages: string; Reponses: string },
    type: "AddMsg"
  ) => {
    dispatch({
      type: type,
      payload: message,
    });
  };

  const clearHistory: clearHistory = () => {
    dispatch({ type: "clear" });
  };

  return (
    <globalContext.Provider
      value={{
        globalState: state,
        clearHistory: clearHistory,
        hundleMessage: addMessage,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default ContextProvider;
