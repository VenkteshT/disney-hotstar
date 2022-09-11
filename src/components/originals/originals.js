import "./originals.css";
import { Link } from "react-router-dom";
import { ORIGINALS } from "../../movies/originalsMovies";
export default function Originals() {
  return (
    <div className="originals-container">
      <h2>Originals</h2>
      <div className="originals-content">
        {ORIGINALS.map((movie) => {
          return (
            <div className="originals-wrap" key={movie.id}>
              <Link to={"/detail"} state={movie}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
