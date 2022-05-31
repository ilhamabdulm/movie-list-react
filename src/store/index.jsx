import { createContext, useContext, useReducer } from 'react';

const AppStoreContext = createContext({});

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
  units: [],
  schoolYears: [],
};

const types = {
  SET_AUTHENTICATION: 'SET_AUTHENTICATION',
  SET_INITIAL_DATA: 'SET_INITIAL_DATA',
};

const reducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user,
      };
    case types.SET_INITIAL_DATA:
      return {
        ...state,
        units: payload.units,
        schoolYears: payload.schoolYears,
      };
    default:
      return state;
  }
};

const actions = (initialState = INITIAL_STATE) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const handleAuthentication = (data) => {
    dispatch({
      type: types.SET_AUTHENTICATION,
      payload: {
        user: data.user,
        isAuthenticated: data.isAuthenticated,
      },
    });
  };

  const handleInitialData = (data) => {
    dispatch({
      type: types.SET_INITIAL_DATA,
      payload: {
        units: data.units,
        schoolYears: data.schoolYears,
      },
    });
  };

  return { state, handleAuthentication, handleInitialData };
};

export const AppStoreProvider = ({ children }) => {
  const data = actions();

  return (
    <AppStoreContext.Provider value={{ ...data }}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = () => useContext(AppStoreContext);
