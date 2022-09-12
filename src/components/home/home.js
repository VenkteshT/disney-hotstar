import "./home.css";
import Slider from "./imageSlider";
import Viewers from "./viewers";
import Recomended from "../recomended/recomended";
import NewDisney from "../newDisney/newDisney";
import Originals from "../originals/originals";
import Trending from "../trending/trending";
import { useSelector, useDispatch } from "react-redux";
import Login from "../login/login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { profileActions } from "../../store/profileSlice";
export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.name);
  const profile = useSelector((state) => state.profile.showProfile);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(profile);
    if (!user) {
      navigate("/");
    } else if (user) {
      navigate("/home");
    }
  }, [user]);
  return user ? (
    <main className="main ">
      <Slider />
      <Viewers />
      <Recomended />
      <NewDisney />
      <Originals />
      <Trending />
    </main>
  ) : (
    <Login />
  );
}
