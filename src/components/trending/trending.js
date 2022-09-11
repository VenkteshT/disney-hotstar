import "./trending.css";
import { TRENDING } from "../../movies/trendingMovies";
import { Link } from "react-router-dom";
export default function Trending() {
  return (
    <div className="trending-container">
      <h2>Trending</h2>
      <div className="trending-content">
        {TRENDING.map((movie) => {
          return (
            <div className="trending-wrap" key={movie.id}>
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
