import { useState } from "react";

export default function AddFilm({ setNewFilm }) {

  const [addFilm, setAddFilm] = useState({
    title: "",
    genre: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setAddFilm({
      ...addFilm,
      [name]: value,
    });
  }

  function addCard(event) {
    event.preventDefault();

    const newCard = {
      title: addFilm.title,
      genre: addFilm.genre,
    };

    setNewFilm(film => [...film, newCard]);

    setAddFilm({
      title: "",
      genre: "",
    });
  }

  return (
    <form className="container mt-5" onSubmit={addCard}>
      <input
        type="text"
        name="title"
        value={addFilm.title}
        onChange={handleChange}
        placeholder="Titolo"
      />

      <input
        type="text"
        name="genre"
        value={addFilm.genre}
        onChange={handleChange}
        placeholder="Genere"
      />

      <button type="submit">Aggiungi</button>
    </form>
  );
}