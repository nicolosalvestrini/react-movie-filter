export default function FilterGenre({setselectedGenre}) {
    function handleChange(event) {
        setselectedGenre(event.target.value);
    }
  return (
    <select className="form-select mb-5 container" aria-label="Default select example" onChange={handleChange}>
      <option value="">Tutti i generi</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
    </select>
  );
}
