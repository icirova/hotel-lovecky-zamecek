import "./Banner.css";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner__stripe">
        <div className="banner__content">
          <div className="banner__heading">
          <h1 className="banner__title" onClick={() => navigate("/")}>Lovecký zámeček Brendy</h1>
          <a className="banner__link" href="/#section--order">Rezervace</a>
          </div>
          <p className="lead">
            Hotel Lovecký zámeček Brendy s bohatou historií psanou od roku
            1780. V samotném srdci Jestřebích hor, uprostřed Broumovské vrchoviny.
          </p>
        </div>
      </div>
    </div>
  );
};
