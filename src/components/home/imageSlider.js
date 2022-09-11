import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IMAGES from "./images";
import { Link } from "react-router-dom";
import "./slider.css";
export default function Image_Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 1,
  };
  return (
    <Slider {...settings}>
      {IMAGES.map((img, i) => (
        <Link to={`/home`} className="images" key={i}>
          <img src={img.path} alt="img" className="image" />
        </Link>
      ))}
    </Slider>
  );
}
