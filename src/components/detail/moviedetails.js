import { useLocation } from "react-router-dom";
import "./moviedetail.css";
import black_play_btn from "./logo/play-icon-black.png";
import white_play_btn from "./logo/play-icon-white.png";
import watchlist from "./logo/watchlist.svg";
export default function Movie_Details() {
  const { state: movie } = useLocation();
  return (
    <div
      className="movie-content-container"
      style={{ backgroundImage: `url(${movie.backgroundImg})` }}
    >
      <div className="movie-content-data">
        <img className="movie-img" src={movie.titleImg} alt={movie.title} />
        <div className="movie-btns">
          <button className="btn movie-btn1">
            <img src={black_play_btn} alt="btn" />
            <span>Play</span>
          </button>
          <button className="movie-btn2 btn">
            <img src={white_play_btn} alt="btn" />
            <span>Trailer</span>
          </button>
          <div className="watchlist">
            <button className="watchlist-btn">
              <img src={watchlist} alt="btn" />
            </button>
            <span className="watchlist-span">Add to watchlist</span>
          </div>
        </div>
        <div className="movie-subtitle">{movie.subTitle}</div>
        <h3>Description</h3>
        <div className="movie-description">{movie.description}</div>
      </div>
    </div>
  );
}
