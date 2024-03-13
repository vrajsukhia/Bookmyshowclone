import React, { createContext,useState } from "react";
export const MovieContext = createContext();

const MoviesPr = ({children}) => {
  const [movie, setMovie] = useState({
      id: 0,
      original_title: "",
      overview: "",
      backdrop_path: "",
      poster_path: "",

  })
  return <MovieContext.Provider value={{movie, setMovie}}>{children}</MovieContext.Provider>
}
export default MoviesPr