import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface MovieState {
  movies: any[];
  selectedMovie: string | null;
  checkedMovies: {[key: string]: boolean};
  activeTab: number;
}

export interface MovieAction {
  type: string;
  payload: any;
}

export const MovieCartContext = createContext<MovieState | undefined>(undefined);

const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  checkedMovies: {},
  activeTab: 1 // set the initial active tab to 1
};

const reducer = (state: MovieState, action: MovieAction) => {
  switch (action.type) {
    case 'setMovies':
      return { ...state, movies: action.payload };
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
  }
};

const MovieContext = createContext<{state: MovieState, dispatch: React.Dispatch<MovieAction>} | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const MovieProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
  }
  return context;
};

const useMovieCart = () => {
  const context = useContext(MovieCartContext);
  if (context === undefined) {
    throw new Error('useMovieCart must be used within a MovieProvider');
  }
  return context;
};

export { MovieProvider, useMovie, useMovieCart };
