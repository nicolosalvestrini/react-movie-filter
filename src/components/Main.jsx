export default function Main({data}) {
  return (
    <div className="container">
        <ul className="row">
            {data.map((movie, index) => (
                <li key={index} className="col-2"></li>
            ))}
        </ul>
    </div>
  );
}