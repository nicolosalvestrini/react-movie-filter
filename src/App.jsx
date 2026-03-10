import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterGenre from "./components/FilterGenre"; 
import AddFilm from "./components/AddFilm";
const film = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

export default function App() {

  const [movies, setMovies] = useState(film);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(film);

  useEffect(() => {

    const filtered =
      selectedGenre === ""
        ? movies
        : movies.filter(movie => movie.genre === selectedGenre);

    setFilteredMovies(filtered);

  }, [selectedGenre, movies]);

  return (
    <>
      <Header />
      <FilterGenre setselectedGenre={setSelectedGenre} />
      <Main data={filteredMovies} />
      <AddFilm setNewFilm={setMovies} />
    </>
  );
}