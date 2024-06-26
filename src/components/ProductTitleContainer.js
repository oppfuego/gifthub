import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ProductTitleContainer.css";

const ProductTitleContainer = ({ className = "" }) => {
  return (
    <div className={`product-title-container ${className}`}>
      <h1 className="heading-1">iTunes Gift Card</h1>
      <div className="container6">
        <img
          className="img-rated-500-out-of-55"
          alt=""
          src="/img--rated-500-out-of-51.svg"
        />
        <div className="customer-reviews">(4 customer reviews)</div>
      </div>
      <div className="quantity">
        <div className="quantity-input-container">
          <div className="backgroundborder">
            <div className="inputs">$10</div>
          </div>
          <div className="backgroundborder1">
            <div className="div32">$15</div>
          </div>
          <div className="backgroundborder2">
            <div className="div33">$25</div>
          </div>
          <div className="backgroundborder3">
            <div className="div34">$50</div>
          </div>
          <div className="backgroundborder4">
            <div className="div35">$100</div>
          </div>
        </div>
        <div className="add-to-cart-button-container">
          <div className="input-product-quantity">
            <div className="container7">
              <div className="quantity-input-labels">
                <div className="k">K</div>
              </div>
              <div className="k1">K</div>
              <div className="quantity-input-fields">
                <div className="l">L</div>
              </div>
            </div>
            <div className="container8">
              <div className="div36">1</div>
            </div>
            <div className="container9">
              <div className="k-wrapper">
                <div className="k2">K</div>
              </div>
              <div className="l1">L</div>
              <div className="l-wrapper">
                <div className="l2">L</div>
              </div>
            </div>
          </div>
          <Button
            className="button10"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#0a0a60",
              border: "#304ffe solid 1px",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#0a0a60" },
              height: 40.8,
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductTitleContainer.propTypes = {
  className: PropTypes.string,
};

export default ProductTitleContainer;
