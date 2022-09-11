import "./viewers.css";
import disney from "./viewerImages/disney.png";
import marvel from "./viewerImages/marvel.png";
import starwars from "./viewerImages/starwars.png";
import National_Geo from "./viewerImages/national.png";
import pixar from "./viewerImages/pixar.png";
export default function Viewers(props) {
  return (
    <div className="container">
      <div className="wraper  wraper1">
        <img src={disney} alt="viewer" />
      </div>
      <div className="wraper wraper2">
        <img src={marvel} alt="viewer" />
      </div>
      <div className="wraper wraper3">
        <img src={pixar} alt="viewer" />
      </div>
      <div className="wraper wraper4">
        <img src={starwars} alt="viewer" />
      </div>
      <div className="wraper wraper5">
        <img src={National_Geo} alt="viewer" />
      </div>
    </div>
  );
}
