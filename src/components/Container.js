import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Container.css";

const Container = ({
  className = "",
  link,
  applebeesGiftCard,
  prop,
  propLeft,
  propTop,
}) => {
  const containerStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`container10 ${className}`} style={containerStyle}>
      <div className="link-wrapper">
        <img className="link-icon1" alt="" src={link} />
      </div>
      <div className="applebees-gift-card">{applebeesGiftCard}</div>
      <div className="wrapper">
        <div className="div37">{prop}</div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  applebeesGiftCard: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Container;
