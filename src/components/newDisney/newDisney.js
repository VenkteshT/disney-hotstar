import "./newDisney.css";
import { Link } from "react-router-dom";
import { DISNEY } from "../../movies/disneyMovies";
export default function NewDisney() {
  return (
    <div className="newDisney-container">
      <h2>New to Disney+</h2>
      <div className="newDisney-content">
        {DISNEY.map((movie) => {
          return (
            <div className="newDisney-wrap" key={movie.id}>
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
