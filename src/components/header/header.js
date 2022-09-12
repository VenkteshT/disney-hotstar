import "./header.css";
import { Link } from "react-router-dom";
import search from "../../images/search.svg";
import home from "../../images/home-icon.svg";
import movie from "../../images/movie-icon.svg";
import original from "../../images/original-icon.svg";
import series from "../../images/series-icon.svg";
import watchlist from "../../images/watchlist.svg";
import { auth, provider } from "../../fire";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Header() {
  const dispatch = useDispatch();
  const person = useSelector((s) => s.user);
  const navigate = useNavigate();
  function loginHandler() {
    console.log(person);
    if (!person.name) {
       auth
       .signInWithPopup(provider)
       .then((res) => {
      dispatch(
        userActions.setLogInDetails({
          name: "res.user.displayName",
          email: "res.user.email",
          photo: "res.user.photoURL",
        })
      );
       })
      .catch((err) => console.log(err));
    } else if (person.name) {
      auth
        .signOut()
         .then((user) => {
      dispatch(userActions.logOut());
      navigate("/");
      })
      .then((err) => console.log(err));
      navigate("/home");
    }
  }
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          userActions.setLogInDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/home");
      }
    });
  }, [person.name]);
  return (
    <nav className="nav">
      <div className="nav-profile"></div>
      {person.name ? (
        <div className="nav-options">
          <Link to={"/home"} className="link">
            <img src={home} alt="img" />
            <span className="img">Home</span>
          </Link>
          <Link to={"/"} className="link">
            <img src={series} alt="img" />
            <span className="img">series</span>
          </Link>
          <Link to={"/"} className="link">
            <img src={movie} alt="img" />
            <span className="img">movie</span>
          </Link>
          <Link to={"/"} className="link">
            <img src={watchlist} alt="img" />
            <span className="img">watchlist</span>
          </Link>
          <Link to={"/"} className="link">
            <img src={original} alt="img" />
            <span className="img">original</span>
          </Link>
          <Link to={"/"} className="link">
            <img src={search} alt="img" />
            <span className="img">search</span>
          </Link>
          <span className="sign-out-photo">
            <img src={person.photo} alt={person.name} className="photo" />
            <div className="sign-out" onClick={loginHandler}>
              <span>sign-out</span>{" "}
            </div>
          </span>
        </div>
      ) : (
        <button className="nav-btn" onClick={loginHandler}>
          Login
        </button>
      )}
    </nav>
  );
}
