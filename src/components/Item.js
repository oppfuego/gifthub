import PropTypes from "prop-types";
import "./Item.css";

const Item = ({
  className = "",
  linkAmazonGiftCard300x300,
  linkHeading2AmazonGiftCar,
  prop,
}) => {
  return (
    <div className={`item25 ${className}`}>
      <img
        className="link-amazon-gift-card-300x303"
        alt=""
        src={linkAmazonGiftCard300x300}
      />
      <div className="link-heading16">{linkHeading2AmazonGiftCar}</div>
      <div className="div25">{prop}</div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  linkAmazonGiftCard300x300: PropTypes.string,
  linkHeading2AmazonGiftCar: PropTypes.string,
  prop: PropTypes.string,
};

export default Item;
