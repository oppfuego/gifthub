import PropTypes from "prop-types";
import "./ProductDetails.css";

const ProductDetails = ({ className = "" }) => {
  return (
    <div className={`product-details ${className}`}>
      <div className="product-image-container">
        <div className="icon-wrapper">
          <img className="icon2" alt="" src="/icon-1.svg" />
        </div>
        <img
          className="item-itunes10-100x100png"
          loading="lazy"
          alt=""
          src="/item--itunes10100x100png@2x.png"
        />
      </div>
      <img
        className="item-itunes15-100x100png"
        loading="lazy"
        alt=""
        src="/item--itunes15100x100png@2x.png"
      />
      <div className="product-image-container1">
        <img
          className="item-itunes25-100x100png"
          loading="lazy"
          alt=""
          src="/item--itunes25100x100png@2x.png"
        />
        <div className="icon-container">
          <img className="icon3" alt="" src="/icon-2.svg" />
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  className: PropTypes.string,
};

export default ProductDetails;
