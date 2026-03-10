export default function CardFilm({title, genre,}) {
  return (
    <div>
        <li className="card bg-primary p-4 mb-4 me-5">
            <h1 className="text-dark text-center fs-4">{title}</h1>
            <p className="text-white text-center">{genre}</p>
        </li>
    </div>
  );
}