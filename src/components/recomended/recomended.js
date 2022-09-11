import "./recomended.css";
import { Link } from "react-router-dom";
import { RECOMENDED } from "../../movies/recomendedMovies";
export default function Recomended() {
  return (
    <div className="recomended-container">
      <h2>Recomended for you</h2>
      <div className="recomended-content">
        {RECOMENDED.map((movie) => {
          return (
            <div key={movie.id} className="recomended-wrap">
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
