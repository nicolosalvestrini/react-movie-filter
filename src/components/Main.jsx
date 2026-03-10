import CardFilm from "./CardFilm";
export default function Main({data}) {
  return (
    <div className="container">
        <ul className="list-unstyled d-flex mr-4 justify-content-center justify-content-between">
            {data.map((movie, index) => (
                <CardFilm 
                key={index} 
                title={movie.title} 
                genre={movie.genre}/>
            ))}
        </ul>
    </div>
  );
}