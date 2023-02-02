import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import useLocalStorage from "use-local-storage";

export interface MovieState {
  movies: any[];
  selectedMovie: string | null;
  filteredMovies : any[];
  checkedMovies: {[key: string]: boolean};
  activeTab: number;
};

export interface MovieAction {
  type: string;
  payload: any;
};

export const MovieCartContext = createContext<MovieState | undefined>(undefined);

const getInitialState = (): MovieState => {
  const localStorageState = localStorage.getItem('state');
  if (localStorageState) {
    return JSON.parse(localStorageState);
  } else {
    return {
      movies: [],
      filteredMovies: [],
      selectedMovie: null,
      checkedMovies: {},
      activeTab: 1 // set the initial active tab to 1
    };
  }
}

const reducer = (state: MovieState, action: MovieAction) => {
  switch (action.type) {
    case 'setMovies':
      return { ...state, movies: action.payload, filteredMovies:  action.payload };
    case 'setFilteredMovies':
      return { ...state, filteredMovies: action.payload };
    case 'updateSelectedMovie':
      const { isSelect, title } = action.payload;
      const updatedCheckedMovies = { ...state.checkedMovies, [title]: isSelect };
      return { ...state, checkedMovies: updatedCheckedMovies };
    case 'changeTab':
      return { ...state, activeTab: action.payload };
    case 'setActiveTab':
      return { ...state, activeTab: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  };
};

const MovieContext = createContext<{state: MovieState, dispatch: React.Dispatch<MovieAction> } | undefined>(undefined);
const LocalStorageContext = createContext(undefined)

interface Props {
  children: ReactNode;
};

const MovieProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  const [storageCheckedMovies, setStorageCheckedMovies] = useLocalStorage<any>("state", state);


  useEffect(() => {
    setStorageCheckedMovies(state);
  }, [state]);
  
  const value = { state, dispatch };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovie = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovie must be used within a MovieProvider');
  };
  return context;
};

export { MovieProvider, useMovie };
