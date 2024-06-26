import PropTypes from "prop-types";
import "./Item1.css";

const Item1 = ({
  className = "",
  linkGooglePlayCardjpg,
  heading2GooglePlayGiftCar,
  imgRated500OutOf5,
  prop,
}) => {
  return (
    <div className={`item24 ${className}`}>
      <img
        className="link-google-play-cardjpg1"
        loading="lazy"
        alt=""
        src={linkGooglePlayCardjpg}
      />
      <div className="heading-27">{heading2GooglePlayGiftCar}</div>
      <img
        className="img-rated-500-out-of-54"
        loading="lazy"
        alt=""
        src={imgRated500OutOf5}
      />
      <div className="div24">{prop}</div>
    </div>
  );
};

Item1.propTypes = {
  className: PropTypes.string,
  linkGooglePlayCardjpg: PropTypes.string,
  heading2GooglePlayGiftCar: PropTypes.string,
  imgRated500OutOf5: PropTypes.string,
  prop: PropTypes.string,
};

export default Item1;
