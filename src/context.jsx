import React, { createContext, useContext } from 'react';

export const MovieCartContext = createContext();

export const useMovieCart = () => useContext(MovieCartContext);