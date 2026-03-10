import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterGenre from "./components/FilterGenre"; 
const film = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(film);

  useEffect(() => {

  const filtered =
    selectedGenre === ""
      ? film
      : film.filter(movie => movie.genre === selectedGenre)

  setFilteredMovies(filtered)

}, [selectedGenre])

  return (
    <>
      <Header />
      <FilterGenre setselectedGenre={setSelectedGenre} />
      <Main data={filteredMovies} />
    </>
  );
}

export default App;
