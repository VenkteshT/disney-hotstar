import "./login.css";
import { Link } from "react-router-dom";
import partners from "../../images/partners.png";
export default function Login() {
  return (
    <section className="container">
      <div className="content">
        <div className="contents">
          <div className="content-owner"></div>
          <div className="content-btn">
            <Link className="btn" to={"/add"}>
              Get All Here
            </Link>
          </div>
          <div className="content-descrition">
            Get the premier access to Raya The Last Dragon for addtion fee with
            Disnery+hotstar Subscription. As of 05/9/2022 The price of
            Disnery+hotstar will increse by 100Rs
          </div>
          <div className="content-partners">
            <img src={partners} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
